import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
export function RespuestaAbierta({
        ElegiRespuestaAbierta

        

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
        
    } 
    
    if(ElegiRespuestaAbierta===false)return null;
    // // VolverAlhome cierra el componente de crear pregunta abierta y abre el componente del home
   
     

    return(
        <div className="FormularioPreguntas">
        
        <section>
       
        <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5">Elija la dificultad de su pregunta</Form.Label>  
        <Form.Select 
        ref={dificultadPreguntaAbiertaRef}
        aria-label="Default select example">
      <option value="Facil">Facil</option>
      <option value="Media">Media</option>
      <option value="Dificil">Dificil</option>
        </Form.Select>  
<br />
    <Form.Label htmlFor="inputPassword5">Formule su pregunta</Form.Label>
      <Form.Control
        ref ={PreguntaAbiertaRef}
        type="text"
        id="PreguntaAbierta"
        aria-label="Default select example"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Tu pregunta debe ser de tipo respuesta abierta; además debe ser acorde al nivel de dificultad elegido
      </Form.Text>
     
              <br />
              <Button 
        variant="outline-dark"
        onClick={handleSubmit}
        >Subir pregunta</Button>
        <br />
        </form>
        </section>
         
        


        
        </div>
    )
    
}