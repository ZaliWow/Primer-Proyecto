import { useRef } from 'react';

export function RespuestaAbierta({
        EleccionAbierta,
        setValidarCrearPregunta,
        setElegiAbierta,

        

}) {
    // Aqui se crearon las variables para guardar la informacion de los inputs
    // realizada por el docente
    const dificultadPreguntaAbiertaRef= useRef(null);
    const PreguntaAbiertaRef= useRef(null);
 // la funcion handlesubmit por ahora muestra en consola los valores de los inputs
    //realizados por el docente ademas cierra el componente de crear pregunta abierta
    // y regresa al elegir pregunta(crearpregunta)
    const handleSubmit =(evento)=>{
        evento.preventDefault();
        console.log(dificultadPreguntaAbiertaRef.current.value);
        console.log(PreguntaAbiertaRef.current.value);
        setValidarCrearPregunta(true)
        setElegiAbierta(false)
    }
    
    if(EleccionAbierta===false)return null;
    // // VolverAlhome cierra el componente de crear pregunta abierta y abre el componente del home
    const VolverAlHome=(evento)=>{
        setValidarCrearPregunta(true)
        setElegiAbierta(false)
    }
     

    return(
        <div className="FormularioPreguntas">
        <button 
            className="Button"
            onClick={VolverAlHome}
            >Oops!
        </button>
        <div
            className="Titulos"             
            ><h1>¡Crea tu pregunta Abierta!</h1>
        </div>
        <section>
        <h2
        className="FormularioPreguntash2"
        >Elige la dificultad</h2>
        <form onSubmit={handleSubmit}>


        
        <select
            ref={dificultadPreguntaAbiertaRef}
            className="Select-FormularioPreguntas"
            name="Dificultad"
            id="NivelDificultad">
                <option>Facil</option>
                <option>Medio</option>
                <option>Dificil</option>
        </select>
        <h3
        className="FormularioPreguntash3"
        >Escriba su pregunta</h3>
        <p>Por favor anéxa una pregunta equivalente la dificultad elegida.</p>
        <input 
        ref={PreguntaAbiertaRef}
        className="imputsSeleccion"
        type="text"  
        
            />
              <br />
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