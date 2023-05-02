import "../Estilos/Home.css"
import "../Estilos/EstilosApp.css"
import "../Estilos/Titulos.css"
import { useState } from "react";
import "../Componentes/ComponentesOpciones/CrearPregunta"
import { CrearPregunta } from "../Componentes/ComponentesOpciones/CrearPregunta";
import { VerRanking } from "./ComponentesOpciones/VerRanking";
import { ComponenteRanking } from "./ComponenteRanking";
import { Header } from "./Header";
import { ComponenteCrearPregunta } from "./ComponenteCrearPregunta";
export function ComponenteHome(
    {
     ValidarInicio,
     setValidacion,
     setValidarHome,
   
}){ 
    
    if(ValidarInicio===false)return null;
    ///props de componentes opcion
    const [opcionCrearPregunta,setOpcionCrearPregunta]=useState(true)
    const [opcionVerRanking,setOpcionVerRanking]= useState(true)
    const [viendoRanking, setViendoRanking]=useState(false)
    const [CreandoPregunta,setCreandoPregunta]=useState(false)

    
    return(
        <>
        <Header
        Salir={ValidarInicio}
        setOpcionCrearPregunta={setOpcionCrearPregunta}
        setOpcionVerRanking={setOpcionVerRanking}
        setValidacion={setValidacion}
        setValidarHome={setValidarHome}
        setViendoRanking={setViendoRanking}
        setCreandoPregunta={setCreandoPregunta}
        >

        </Header>
        <div className="Home">
            <div className="HomePadding">
                
        <VerRanking
        ElegiVerRanking={opcionVerRanking}
        setOpcionCrearPregunta={setOpcionCrearPregunta}
        setOpcionVerRanking={setOpcionVerRanking}
        setViendoRanking={setViendoRanking}
        >

        </VerRanking>
        </div>
        <div className="HomePadding">
        <CrearPregunta
           ElegiCrearPregunta={opcionCrearPregunta}
           setOpcionCrearPregunta={setOpcionCrearPregunta}
           setOpcionVerRanking={setOpcionVerRanking}
           setCreandoPregunta={setCreandoPregunta}
           ></CrearPregunta>
        </div>

       
        </div>
        <div>
        <ComponenteRanking
        ViendoRanking={viendoRanking}
        setViendoRanking={setViendoRanking}
        >    
        </ComponenteRanking>
        </div>
        <div>
            <ComponenteCrearPregunta
            ElegiCrearPregunta={CreandoPregunta}
            
            ></ComponenteCrearPregunta>
        </div>

        </>
    
      )

}