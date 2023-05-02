import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function OpcionesPreguntas({
  setCreandoFalsoVerdadero,
  setCreandoMultipleRespuesta,
  setCreandoAbierta,
  setRecomendar,
  ValidarOpciones,
  setOpciones
}) {

  if(ValidarOpciones===false)return null;
    
    const EleccionAbierta= (e)=>{
      setCreandoFalsoVerdadero(false)
      setCreandoMultipleRespuesta(false)
      setCreandoAbierta(true)
      setRecomendar(false)
      setOpciones(false)
      
    }
    const EleccionFalsoVerdadero= (e)=>{
      setCreandoFalsoVerdadero(true)
      setCreandoMultipleRespuesta(false)
      setCreandoAbierta(false)
      setRecomendar(false)
      setOpciones(false)
    }
    const EleccionMultiple= (e)=>{
      setCreandoFalsoVerdadero(false)
      setCreandoMultipleRespuesta(true)
      setCreandoAbierta(false)
      setRecomendar(false)
      setOpciones(false)
    }

    return(
        <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pregunta Falso Verdadero</Card.Title>
          <Card.Text>
          ¡Crea tu pregunta!
          </Card.Text>
          <Button 
          variant="dark"
          onClick={EleccionFalsoVerdadero}
          >Lets go!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Multiple Respuesta</Card.Title>
          <Card.Text>
          ¡Crea tu pregunta!
          </Card.Text>
          <Button 
          variant="dark"
          onClick={EleccionMultiple}
          >Lets go!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pregunta Respuesta Abierta</Card.Title>
          <Card.Text>
          ¡Crea tu pregunta!
          </Card.Text>
          <Button 
          variant="dark"
          onClick={EleccionAbierta}
          >Lets go!</Button>
        </Card.Body>
      </Card>


      </div>
    )
    
}