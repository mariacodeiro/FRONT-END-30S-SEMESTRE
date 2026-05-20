import { useState } from "react";

function formulariostate() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    function pegarSobrenome(evento) {
        setSobrenome(evento.target.value);
    }
    return(
        <div>
            <h2>Formulario com state</h2>
          <label htmlFor="nome">Nome</label>
          <input 
          type="text" 
          placeholder="Digite seu nome"
          onChange={(evento) => {
            setNome(evento.target.value);
          }}

         

        />
        <br />
        <label htmlFor="">Texto Digitado: {nome} {sobrenome}</label>
        
        
        
        </div>
    )
}

export default formulariostate