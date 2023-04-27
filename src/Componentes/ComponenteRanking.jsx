import '../Estilos/Ranking.css'
import '../Estilos/Titulos.css'
export function ComponenteRanking({
  EleccionRanking,
  setElegiRanking,
  setValidarHome
  }) 
  {
 
  const VolverHome =(evento)=>{
    setElegiRanking(false)
    setValidarHome(true)
    
  }
  if (EleccionRanking === false)return null;
  return(
    <div className="Ranking">    
      <button 
      className="ButtonHomeRanking"
      onClick={VolverHome}> Volver al Home</button>
      <div className='Titulos'>
        <h1>
          !Aqui Mostraremos el Ranking!
        </h1>
      </div>
      <section id='contenido'>
      <div className='ContainerTop'>
        <h3>Top</h3> 
      </div>
      <div className='ContainerNombre'>
        <h3>Nombre Estudiante</h3>
      </div>
      <div className='ContainerPuntuacion'>
        <h3>Puntuacion</h3>
      </div>
      </section>
      <section id='contenido'>
      <div className='Container'> <h3> 1 </h3> </div>
      </section>
    </div>
  )
  
}