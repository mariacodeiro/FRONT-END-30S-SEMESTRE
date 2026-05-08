import "./Menu.css";
import CardPerfil from "../cardperfil/card-perfil";
function Menu() {
    return(
    <nav className="menu">
        <a href="#" className="menu__item"> Home</a>
        <a href="#" className="menu__item" > Quem somos</a>
        <a href="#" className="menu__item">  Contato</a>
        <a href="#" className="menu__item menu__item--signin" > Entrar</a>
        <a href="#" className ="menu__item menu__item--signup"> Cadastrar</a>
    
      <CardPerfil />
        
    </nav>
     
    );
}

export default Menu

