import '../Estilos/PagPrincipal.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export function Presentacion() {

    return(
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.univalle.edu.co/images/Univalle/70_Rojo.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Prototipo proyecto de grado.
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    )
    
}