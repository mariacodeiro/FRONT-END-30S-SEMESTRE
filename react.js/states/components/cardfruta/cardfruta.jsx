import './cardfruta.css'
import { useState } from 'react';





export default function Cardfruta() {
    const [fruta,setFrutas] = useState("")  
   const [quantidade, setQuantidade] = useState(0)
  
    


const [arrFruta, setArrtFrutas] = useState([
    {id: 1, nome: "Limao", quantidade: 10},
    {id: 2, nome: "Abacaxi", quantidade: 5}
  
])

function cadastrar(e) {
    e.preventDefault()
    setArrtFrutas([...arrFruta, {id: Date.now(), nome: fruta, quantidade: quantidade }])
   
}


        return(
            <section className="sessao-cadastro">
                <h2>Cadastro</h2>
                <form action="" onSubmit={cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">
                        digite o nome da fruta
                    </label>
                </fieldset>


                <input type="text"
                id="fruta"
                placeholder="ex: limao" 
                    className="cadastro__entrada"
                    onChange={(e) => {
                    setQuantidade(e.target.value)
                  }  }
                 />
                 <button type='submit' className="cadastro__btncadastar">Cadastrar</button>
               </form>
              <div className="resultados">
                <ul>
                    { arrFruta.map((f) => {
                            return(
                  <li key={f.id}>
                    Fruta: <strong>{f.nome}</strong>
                    Quantidade: <strong>{f.quantidade}</strong>
                    </li>
                  )
              })
            }
           
          </ul>

        </div>
        
        </section>
    )
}


