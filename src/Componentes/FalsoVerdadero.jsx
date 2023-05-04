import '../Estilos/_Login.css'
import '../Estilos/Home.css'
import '../Estilos/Titulos.css'
import'../Estilos/FormularioPreguntas.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRef } from 'react'
export function FalsoVerdadero({
    ElegiFalsoVerdadero 
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
        
    }
    // VolverAlhome cierra el componente de crear pregunta abierta y abre el componente del home
    if(ElegiFalsoVerdadero === false)return null;
   
  
    return(
        <div
        className ="FormularioPreguntas"
        > 
                <form onSubmit={handleSubmit}>
                <Form.Label htmlFor="inputPassword5">Elija la dificultad de su pregunta</Form.Label>  
        <Form.Select 
        ref={dificultadVFRef}
        aria-label="Default select example">
      <option value="Facil">Facil</option>
      <option value="Media">Media</option>
      <option value="Dificil">Dificil</option>
        </Form.Select>  
        <br />
        <Form.Label htmlFor="inputPassword5">Formule su pregunta</Form.Label>
      <Form.Control
        ref ={preguntaVFRef}
        type="text"
        id="PreguntaAbierta"
        aria-label="Default select example"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Tu pregunta debe ser de tipo respuesta Falso o Verdadero; además debe ser acorde al nivel de dificultad elegido
      </Form.Text>
                <br />
                <Form.Label htmlFor="inputPassword5">Elija la respuesta correcta a su pregunta</Form.Label>  
        <Form.Select 
        ref={respuestaVFRef}
        aria-label="Default select example">
      <option value="Verdadero">Verdadero</option>
      <option value="Falso">Falso</option>
        </Form.Select> 
        <br />
        <Button 
        variant="outline-dark"
        onClick={handleSubmit}
        >Subir pregunta</Button>
        <br />
                </form>
           
        </div>
    )
}