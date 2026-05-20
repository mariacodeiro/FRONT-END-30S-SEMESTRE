import { useState } from 'react'
import './App.css'

function App() {
  
const [titulo, setTitulo] = useState("Google");

     function mudarTexto() {
        setTitulo("Microsoft");

     }
       
     
        function mudarTexto() {
        setTitulo("Adenicon");
     }

     return(
    <>
   {/* //   <h1>minha Pagina de {titulo}</h1>
   //   <button onClick={mudarTexto}>Mudar Titulo</button>
   //   <button onClick>Adenicon</button>

   //   <Contador/>
   //   <formulariostate/>
     */}
    </>

     );
   }

export default App;
