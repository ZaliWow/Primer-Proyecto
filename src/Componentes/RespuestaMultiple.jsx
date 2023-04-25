import { useRef } from "react";

export function RespuestaMultiple({
        EleccionMultiple,
        setValidarCrearPregunta,
        setElegiMultiple

    
    }
    
    )
     {
    // Aqui se crearon las variables para guardar la informacion de los inputs
    // realizada por el docente
    const dificultadAbiertaRef=useRef(null);
    const preguntaMultipleRef = useRef(null);
    const opcionARef= useRef(null);
    const opcionBRef= useRef(null);
    const opcionCRef= useRef(null);
    const opcionDRef= useRef(null);
    const respuestaMultipleRef=useRef(null);
    // la funcion handlesubmit por ahora muestra en consola los valores de los inputs
    //realizados por el docente ademas cierra el componente de crear pregunta multiple
    // y regresa al elegir pregunta(crearpregunta)
    const handleSubmit=(evento)=>{
        evento.preventDefault();
        console.log(preguntaMultipleRef.current.value);
        console.log(respuestaMultipleRef.current.value);
        console.log(opcionARef.current.value);
        console.log(opcionBRef.current.value);
        console.log(opcionCRef.current.value);
        console.log(opcionDRef.current.value);
        setElegiMultiple(false)
        setValidarCrearPregunta(true)


    }
    //////////Este if permite no mostrar el componente antes de ser llamado
    if(EleccionMultiple===false)return null;
    // VolverAlhome cierra el componente de crear pregunta multiple y abre el componente del home
    const VolverAlHome=(evento)=>{
        setValidarCrearPregunta(true)
        setElegiMultiple(false)
    }
 
    return(
        <div
         className="FormularioPreguntas">
            <button
                onClick={VolverAlHome}
                className="Button"
                >Oops!
            </button>
            <div 
            className="Titulos">
                <h1>¡Crea tu pregunta con Multiple Respuesta!</h1>
            </div>
            <h1>¡Hora de comenzar!</h1>
            <section>
                <h2
                    className='FormularioPreguntash2'
                    >Elige una Dificultad.
                </h2>
            <form onSubmit={handleSubmit}>
            
                <select 
                    ref={dificultadAbiertaRef}
                    className="Select-FormularioPreguntas"
                    name="Dificultad" 
                    id="NivelDificultad">
                        <option>Facil</option>
                        <option>Medio</option>
                        <option>Dificil</option>
                </select>
                <h2
                    
                    className="FormularioPreguntash2"
                    >Escriba su pregunta
                </h2>
                <p>Por favor anéxa una pregunta equivalente la dificultad elegida.</p>
                <input 
                    ref={preguntaMultipleRef}
                    className="imputsSeleccion"
                    type="text" />
                <h3
                    className="FormularioPreguntash2"
                    >Escriba opcion A
                </h3>
                <input
                    ref={opcionARef}
                    className="imputsSeleccion"
                    type="text" />
                <h3
                    className="FormularioPreguntash2"
                    >Escriba opcion B
                </h3>
                <input
                    ref={opcionBRef}
                    className="imputsSeleccion"
                    type="text" />
                <h3
                    className="FormularioPreguntash2"
                    >Escriba opcion C
                </h3>
                <input 
                    ref={opcionCRef}
                    className="imputsSeleccion"
                    type="text" />
                <h3
                    className="FormularioPreguntash2"
                    >Escriba opcion D
                </h3>
                <input 
                ref={opcionDRef}
                    className="imputsSeleccion"
                    type="text" />
                <h3
                    className="FormularioPreguntash2"
                    >Elija la respuesta correcta
                </h3>
                <select 
                    ref={respuestaMultipleRef}
                    className="Select-FormularioPreguntas"
                    name="Multiple" 
                    id="RespuestaCorrecta">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                </select>
                <button
                    onClick={handleSubmit}
                    className='ButtonUp'
                    >
                     Subir pregunta
                </button>
            
            </form>
            </section>
            
            
        </div>

    )

    
}