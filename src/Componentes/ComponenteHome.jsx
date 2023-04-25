import "../Estilos/Home.css"
import "../Estilos/EstilosApp.css"
import "../Estilos/Titulos.css"

export function ComponenteHome(
    {
     ValidarInicio,
     setValidarHome,
     setValidacion,
     setValidarCrearPregunta,
    setElegiRanking}){ 
    if(ValidarInicio === false)return null;
    
    const cerrarSesion =(evento)=>{
        setValidarHome(false)
        setValidacion(true)
        
    }
   const PasarCrearPregunta=(evento)=>{
        setValidarHome(false)
        setValidarCrearPregunta(true)
   }
   const MirarRanking=(evento)=>{
        setValidarHome(false)
        setValidacion(false)
        setElegiRanking(true)
        setValidarCrearPregunta(false)
   }
    
    return(
        <div className="Home">
        <div
        className="Titulos">
        <h1>Home, Aprendiendo con bendición</h1>
        </div>
        <h4>Bienvenido, Este es un prototipo del trabajo de Grado del estudiante William David Morales 
            Está en desarrollo y el pibito sabe poquito obvio parece una UI tipo imagen desarrollada con paint
        </h4>
        <button 
        className="botonesApp"
        onClick={cerrarSesion}
        >Cerrar Sesión</button>
        <button
        
        onClick={PasarCrearPregunta}
        >Crear Pregunta</button>
        <button
          className="botonesApp"
          onClick={MirarRanking}
        >Visual Raking</button>

        </div>
    )

}