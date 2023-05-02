import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

export function Header({
 Salir,
 setOpcionCrearPregunta,
 setOpcionVerRanking,
 setValidacion,
 setValidarHome,
 setViendoRanking,
 setCreandoPregunta

}){
  if(Salir === false)return null;
    
  const VolverHome =(evento)=>{
    setValidarHome(true)
    setOpcionVerRanking(true)
    setOpcionCrearPregunta(true)
    setViendoRanking(false)
    setCreandoPregunta(false)
  }
  const Logout =(evento)=>{
    setValidacion(true)
    setValidarHome(false)
  }

  return(
      
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Button
            variant='warning'
            onClick={VolverHome}
            >Home</Button>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Collapse 
          className="justify-content-end">
          <Button 
          variant="outline-warning "
          onClick={Logout}
          >Log out</Button>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
    )
}