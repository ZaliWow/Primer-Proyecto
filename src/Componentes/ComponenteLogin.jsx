import '../Estilos/_Login.css'
export function ComponenteLogin({
    ValidarExistencia,
    setValidacion,
    setValidarHome}){


    if(ValidarExistencia === false)return null;

    const desaparecer_boton =(evento)=>{
        setValidacion(false)
        setValidarHome(true)
        
    }
    

    return(
        <>
          <section className="_Loguin"> 
          <h1>Login</h1>
          <h4>Ingrese Usuario</h4>
          <input 
          className = "controles"
          type="text" />
          <h4>Ingrese Contraseña</h4>
          <input
          className = "controles"
          type="password" />
          <button
          className="botones"
          onClick={desaparecer_boton}
          >Log in</button>
        </section>
          
         
        </>
        
    )
}