import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
export function VerRanking({
  ElegiVerRanking,
  setOpcionCrearPregunta,
  setOpcionVerRanking,
  setViendoRanking,

}) {
  if(ElegiVerRanking===false)return null;

  const VerRanking =(evento)=>{
    setOpcionCrearPregunta(false)
    setOpcionVerRanking(false)
    setViendoRanking(true)
  }

    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://st4.depositphotos.com/1029150/20130/i/600/depositphotos_201301878-stock-photo-low-key-of-trophy-on.jpg" />
      <Card.Body>
        <Card.Title>Ranking TOP</Card.Title>
        <Card.Text>
          Opción para visualizar el ranking; como profesor siempre recuerda fomentar
          la sana competencia, pero ayuda a fomentar la competitividad
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Button
        onClick={VerRanking}
        variant="outline-dark"
        >Ver Ranking</Button>
      </Card.Body>
    </Card>
    )
    
}