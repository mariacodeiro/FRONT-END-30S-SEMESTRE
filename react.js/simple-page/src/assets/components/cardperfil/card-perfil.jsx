
import Imagemperfil from "../../imagem.jpg";
import "./cardperfil.css";  
function CardPerfil() {
    return (
        <div className="card-perfil">
        <img className="card-perfil__image" src={Imagemperfil} alt="imagem do usuario"/>
    </div>
    );
}

export default CardPerfil;