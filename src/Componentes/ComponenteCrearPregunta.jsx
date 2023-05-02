import "../Estilos/CrearPregunta.css"
import "../Estilos/Titulos.css"
import "../Estilos/Home.css"
import { Recomendaciones } from "./ComponentesOpciones/Recomendaciones";
import { OpcionesPreguntas } from "./ComponentesOpciones/OpcionesPreguntas";
import { useState } from "react";
import { FalsoVerdadero } from "./FalsoVerdadero"
import {RespuestaAbierta} from "./RespuestaAbierta"
import {RespuestaMultiple} from "./RespuestaMultiple"
export function ComponenteCrearPregunta({
     ElegiCrearPregunta,
     setValidarHome
    }){
    if(ElegiCrearPregunta===false)return null;
   
   const[CreandoFalsoVerdadero, setCreandoFalsoVerdadero]=useState(false)
   const[CreandoMultipleRespuesta, setCreandoMultipleRespuesta]=useState(false)
   const[CreandoAbierta, setCreandoAbierta]=useState(false)
   const[Recomendar, setRecomendar]=useState(true)
   const[Opciones,setOpciones]=useState(true)
    return(
    <>
    <div className="Linea">
    <br />
    <Recomendaciones
    ValidarRecomendar={Recomendar}
    ></Recomendaciones>
    <br />
    <OpcionesPreguntas
    setCreandoFalsoVerdadero={setCreandoFalsoVerdadero}
    setCreandoMultipleRespuesta={setCreandoMultipleRespuesta}
    setCreandoAbierta={setCreandoAbierta}
    setRecomendar={setRecomendar}
    ValidarOpciones={Opciones}
    setOpciones={setOpciones}
    ></OpcionesPreguntas>
    <br />
    <FalsoVerdadero
    ElegiFalsoVerdadero ={CreandoFalsoVerdadero}
    ></FalsoVerdadero>
    <RespuestaAbierta
    ElegiRespuestaAbierta ={CreandoAbierta}
    >
    </RespuestaAbierta>
    <RespuestaMultiple
    ElegiMultipleRespuesta={CreandoMultipleRespuesta}
    >
    </RespuestaMultiple>
    </div>
    </>
    )
}