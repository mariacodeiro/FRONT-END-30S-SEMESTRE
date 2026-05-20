  import { useState } from "react";
  
  
  function Contador() {

const [contador, setContador] = useState(0);

function incrementar() {
    setContador(contador);

    if(contador < 10) {
        setContador(0);
    }
}

function decrementar() {

    if(contador > 0) {
        setContador(contador - 1)

    } else {
        setContador(0);
    }

}


    return(

      <div className="contador"   >
            <h1 className="contador_title" >Contador 
                {contador}
            </h1>

           <button onClick={incrementar}>Contar (++)</button>
            <button onClick={crementar}>Contar (--)</button>
       </div>
    )
    
}



export default Contador;