import "../Estilos/CrearPregunta.css"
import "../Estilos/Titulos.css"
export function ComponenteCrearPregunta({
     CrearPregunta,
     setValidarHome,
     setValidarCrearPregunta,
     setElegiYN,
     setElegiMultiple,
     setElegiAbierta
    }){
    if(CrearPregunta===false)return null;
    const VolverHome =() =>{
        setValidarCrearPregunta(false)
        setValidarHome(true)
        setElegiYN(false)
        setElegiMultiple(false)
        setElegiAbierta(false)
    }
    const CrearFalsoVerdadero =() =>{
        setValidarCrearPregunta(false)
        setElegiYN(true)
        setElegiMultiple(false)
        setElegiAbierta(false)
    }
    const CrearEleccionMultiple=() =>{
        setValidarCrearPregunta(false)
        setElegiYN(false)
        setElegiMultiple(true)
        setElegiAbierta(false)

    }
    const CrearAbierta=() =>{
        setValidarCrearPregunta(false)
        setElegiYN(false)
        setElegiMultiple(false)
        setElegiAbierta(true)

    }
    return(
    <div >
        <section
         className="CrearPregunta">
            
            <button
            className="ButtonHome"
            onClick={VolverHome}
            >volver al home</button>
           <div className="Titulos">
           <h1>¡Crea Tu pregunta!</h1>
           </div>
            <h2>Elige el tipo de pregunta</h2>
            <button
            className ="BotonesSeleccion"
            onClick={CrearFalsoVerdadero}
            >YesNo Question</button>
            <button
            className ="BotonesSeleccion"
            onClick={CrearEleccionMultiple}
            >Multiple Respuesta</button>
            <button
            className ="BotonesSeleccion"
            onClick={CrearAbierta}
            >Pregunta Abierta</button>
        </section>
    </div>)
}