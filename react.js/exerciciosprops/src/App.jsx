
import './App.css'
import Perfil from './Components/exercicio03/perfil'
import Produto from './Components/exercicio02/produto'
import Title from './Components/Title/title'
import Saudacao from './Components/Exercicio01/saudacao';
import MyChildren from './Components/myChildren/myChldren';

function App() {
  return (
    <>

      <Title
        texto="Julio"
        sobrenome="cesar"
      />


      <Title
        texto="Maria"
        sobrenome="cordeiro"
      />



      <Title
        texto="Diogo"
        sobrenome="Aldrovandi"
        idade={17} />


      <Saudacao nome="Julio" />
      <Saudacao nome="Maria" />
      <Saudacao nome="Diogo" />

    <MyChildren>
      <Produto
        nome="Notebook"
        preco={3500}
        descricao="Notebook Gamer com processador Intel Core i7, 16GB de RAM e placa de vídeo dedicada."
      />
      <Produto
        nome="Smartphone"
        preco={1500}
        descricao="Smartphone com tela AMOLED, câmera de alta resolução e bateria de longa duração."
      />
      <Produto
        nome="Fone de Ouvido"
        preco={300}
        descricao="Fone de ouvido sem fio com cancelamento de ruído e qualidade de som premium."
      />
  

      <Perfil
        nome="Julio"
        idade={17}
        profissao="Desenvolvedor Front-end"
      />
      <Perfil
        nome="Maria"
        idade={25}
        profissao="Designer Gráfico"
      />
      <Perfil
        nome="Diogo"
        idade={30}
        profissao="Engenheiro de Software"
     
      /> 
      </MyChildren>
    </>







  );

}

export default App;
