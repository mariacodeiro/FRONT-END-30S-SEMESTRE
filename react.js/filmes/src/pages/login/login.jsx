import "./Login.css";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg"
import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext"   ;
import { useNavigate } from "react-router-dom";
import api from "../../Services/services";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();



        try {
            const resposta = await api.post("/Login", {
                email,
                senha
            });

            localStorage.setItem("token", resposta.data.token);
             

            setUsuario({
                email
            });

            navigate("/filme");

        } catch (error) {
            console.log(error);
            console.log(error.response);
            alert("Erro ao fazer login");
        }
    };

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />
                <form onSubmit={login} action="" className="form_login">
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </div>
                    <Botao nomeDoBotao="Entrar" />
                    {/* <button className="botao_login" type="submit">Entrar</button> */}
                </form>
            </section>
        </main>
    );
};

export default Login;
