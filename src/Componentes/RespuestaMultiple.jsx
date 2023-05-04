import { useRef } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
export function RespuestaMultiple({
        ElegiMultipleRespuesta

     
    }
    
    )
     {
    // Aqui se crearon las variables para guardar la informacion de los inputs
    // realizada por el docente
    const dificultadMultipleRef=useRef(null);
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
        console.log(dificultadMultipleRef.current.value)
        console.log(preguntaMultipleRef.current.value);
        console.log(respuestaMultipleRef.current.value);
        console.log(opcionARef.current.value);
        console.log(opcionBRef.current.value);
        console.log(opcionCRef.current.value);
        console.log(opcionDRef.current.value);
        


    }
    //////////Este if permite no mostrar el componente antes de ser llamado
    if(ElegiMultipleRespuesta===false)return null;
    // VolverAlhome cierra el componente de crear pregunta multiple y abre el componente del home
   
 
    return(
        <div
         className="FormularioPreguntas">
            <section>
            <form onSubmit={handleSubmit}>
            
         <Form.Label htmlFor="inputPassword5">Elija la dificultad de su pregunta</Form.Label>  
        <Form.Select 
        ref={dificultadMultipleRef}
        aria-label="Default select example">
      <option value="Facil">Facil</option>
      <option value="Media">Media</option>
      <option value="Dificil">Dificil</option>
        </Form.Select>  
        
        <br />
    <Form.Label htmlFor="inputPassword5">Formule su pregunta</Form.Label>
      <Form.Control
        ref ={preguntaMultipleRef}
        type="text"
        id="PreguntaMultiple"
        aria-label="Default select example"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Tu pregunta debe ser de tipo respuesta multiple; además debe ser acorde al nivel de dificultad elegido
      </Form.Text>
     
              <br />
              <Form.Label htmlFor="inputPassword5">Formule la opcion A</Form.Label>
      <Form.Control
        ref ={opcionARef}
        type="text"
        id="PreguntaMultiple"
        aria-label="Default select example"
      />
      
               <br />
               <Form.Label htmlFor="inputPassword5">Formule la opcion B</Form.Label>
      <Form.Control
        ref ={opcionBRef}
        type="text"
        id="PreguntaMultiple"
        aria-label="Default select example"
      />
               <br />
               <Form.Label htmlFor="inputPassword5">Formule la opcion C</Form.Label>
      <Form.Control
        ref ={opcionCRef}
        type="text"
        id="PreguntaMultiple"
        aria-label="Default select example"
      />
               <br />
               <Form.Label htmlFor="inputPassword5">Formule la opcion D</Form.Label>
      <Form.Control
        ref ={opcionDRef}
        type="text"
        id="PreguntaMultiple"
        aria-label="Default select example"
      />
               
               <br />
               <Form.Label htmlFor="inputPassword5">Elija la respuesta correcta</Form.Label>  
        <Form.Select 
        ref={respuestaMultipleRef}
        aria-label="Default select example">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
        </Form.Select>  
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