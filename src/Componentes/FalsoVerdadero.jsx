import '../Estilos/_Login.css'
import '../Estilos/Home.css'
import '../Estilos/Titulos.css'
import'../Estilos/FormularioPreguntas.css'
import '../Hooks/FormularioVF.jsx'
import { useRef } from 'react'
export function FalsoVerdadero({
    EleccionYN,
    setValidarCrearPregunta,
    setElegiYN,
    
   



}){
    // Aqui se crearon las variables para guardar la informacion de los inputs
    // realizada por el docente
    const preguntaVFRef =useRef(null);
    const respuestaVFRef =useRef(null);
    const dificultadVFRef=useRef(null);
// la funcion handlesubmit por ahora muestra en consola los valores de los inputs
    //realizados por el docente ademas cierra el componente de crear pregunta V F
    // y regresa al elegir pregunta(crearpregunta)
    const handleSubmit=(evento)=>{
        evento.preventDefault();
        console.log(preguntaVFRef.current.value);
        console.log(dificultadVFRef.current.value);
        console.log(respuestaVFRef.current.value);
        setValidarCrearPregunta(true)
        setElegiYN(false)
    }
    // VolverAlhome cierra el componente de crear pregunta abierta y abre el componente del home
    if(EleccionYN === false)return null;
    const VolverAlHome=(evento)=>{
        setValidarCrearPregunta(true)
        setElegiYN(false)
    }
  
    return(
        <div
        className ="FormularioPreguntas"
        > 
        
        <button 
                className='Button'
                onClick={VolverAlHome}
                >Oops!
            </button>
            <div
                className ="Titulos"
                >
                <h1
                >¡Crea una pregunta de tipo Falso Verdadero!
                </h1>
            </div>

            <section 
                 
            >
                <h1>¡Hora de comenzar!</h1>
                <h2
                    className='FormularioPreguntash2'
                    >Elige una Dificultad.
                </h2>
                <form onSubmit={handleSubmit}>
                <select
                    ref={dificultadVFRef}
                    placeholder='Dificultad'
                    name="dificultad" 
                    id="NivelDificultad"
                    className="Select-FormularioPreguntas"
                    >
                    <option>Facil</option>
                    <option>Medio</option>
                    <option>Dificil</option>
                </select>
                <h2
                    className='FormularioPreguntash2'
                    >Crea tu Pregunta.
                </h2>
                <p>Por favor anéxa una pregunta equivalente la dificultad elegida.</p>
                <input
                    ref={preguntaVFRef}
                    className='imputsSeleccion' 
                    type="text" />
                <h2
                    className='FormularioPreguntash2'
                    >Elige La respuesta Correcta.
                </h2>
                <select 
                    ref={respuestaVFRef}
                    name="FV"
                    id="RespuestaCorrecta"
                    className="Select-FormularioPreguntas"
                    >
                    <option>Falso</option>
                    <option>Verdadero</option>
                    
                    
                </select>
                <button

                    className='ButtonUp'
                    onClick={handleSubmit}
                >
                    Subir pregunta
                </button>
                </form>
            </section> 
        </div>
    )
}