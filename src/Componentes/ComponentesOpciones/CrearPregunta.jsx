import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
export function CrearPregunta({
    setOpcionCrearPregunta,
    ElegiCrearPregunta,
    setOpcionVerRanking,
    setCreandoPregunta
    
}) {
if(ElegiCrearPregunta===false)return null;
const CrearPregunta=(evento)=>{
    setOpcionCrearPregunta(false)
    setOpcionVerRanking(false)
    setCreandoPregunta(true)
} 

    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://s3.amazonaws.com/static.om.anigamy.net/static.biennatural.com.ar/App/Article/el-arte-de-preguntar-clave-para-las-relaciones-exitosas-4054-mainImage-0.jpg" />
      <Card.Body>
        <Card.Title>Crear Pregunta</Card.Title>
        <Card.Text>
          Formularios de para formulación de nuevas preguntas; por favor ten en cuenta 
          que las preguntas deben tener:
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Una dificultad</ListGroup.Item>
        <ListGroup.Item>Tipo</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
      <Button 
      onClick={CrearPregunta}
      variant="outline-dark"
      >Nueva Pregunta</Button>
      </Card.Body>
    </Card>
    )
    
}