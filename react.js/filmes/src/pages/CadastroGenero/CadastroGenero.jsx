import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import api from "../../Services/services"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { Alerta } from "../../components/alerta/Alerta"


const CadastroGenero = () => {


    //Variaveis de states
    const [NomeGenero, setNomeGenero] = useState('')
    const [listaGeneros, setListaGeneros] = useState([])
    const [editar, setEditar] = useState(false)
    const [id, setId] = useState(0)

    //funções e ciclo de vida


    const getGeneros = async () => {
        //chama a api
        try {
            const RetornoAPI = await api.get("/Genero")
            setListaGeneros(RetornoAPI.data)//preencher o array listarGeneros
        } catch (error) {
            alert("Problemas ao carregar os dados da API")
        }


    }


    async function cadastrarGenero(e) {
        e.preventDefault();

        if (NomeGenero.trim().length == 0) {
            // alert("Preencha o nome do gênero!");
            Alerta({
                title: 'Cadastro de Gênero',
                text: 'Preencher o gênero',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return false;
        }

        const objCadastro = {
            nome: NomeGenero
        }

        try {
            await api.post('/Genero', objCadastro);

            Alerta({
                title: 'Cadastro de Gênero',
                text: `${NomeGenero} Cadastrado com sucesso!!`,
                icon: 'success',
                confirmButtonText: 'Top, legal'
            })


            setNomeGenero('');
            getGeneros();
        } catch (error) {
            Swal.fire({
                title: 'Cadastro de Gênero',
                text: 'Erro ao Fazer Cadastro ' + error,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            console.error(error)
        }


    }

    const limparFormulario = () => {
        setNomeGenero("")
        setEditar(false)
    }

    const excluirGenero = async (item) => {
        // if (!confirm(`Quer apagar realmente esse gênero ${item.nome}?`)) {
        //     return false;
        // }

        
        const result = await Alerta({
            title: "Cadastro de Gênero",
            text: `Tem certeza de que quer apagar ${NomeGenero}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, Apagar!",
            cancelButtonText: "Cancelar"
        })
        if (!result.isConfirmed) {
            return false
        }

        
        try {
            const RetornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            if (RetornoAPI.status == 200 || RetornoAPI.status == 204) {

                Alerta({
                    title: 'Cadastro de Gênero',
                    text: 'Apagado com sucesso',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
        

                getGeneros()
            }
        } catch (error) {
            Alerta({
                title: 'Cadastro de Gênero',
                text: 'Problemas ao carregar dados da API',
                icon: 'error',
                confirmButtonText: 'Cool'
            })

        }


    }

    //mostra os dados no formulario para o usuario editar
    const preEditar = (item) => {
        setEditar(true)
        setNomeGenero(item.nome)
        setId(item.idGenero)
    }

    const editarGenero = async (e) => {
        e.preventDefault()

        if (NomeGenero.trim().length == 0) {
            Alerta({
                title: 'Cadastro de Gênero',
                text: 'Preencher o gênero',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return false;
        }

        const objEditar = {
            nome: NomeGenero,
        }

        try {
            const RetornoAPI = await api.put(`/Genero/${id}`, objEditar);

            Alerta({
                title: 'Cadastro de Gênero',
                text: 'Sucesso ao editar',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            limparFormulario()
            getGeneros();
        } catch (error) {
            Alerta({
                title: 'Cadastro de Gênero',
                text: 'Erro ao Editar',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            console.log(error)
        }


    }
    //editar genero

    // Ciclo de Vida
    useEffect(() => { getGeneros() }, [])

    //O JSX em si (XML E HTML)  
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Gênero"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="gênero"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    //Valor atual do campo de texto
                    valor={NomeGenero}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setNomeGenero}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                />


                {/* Lista Generos */}
                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />


            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero