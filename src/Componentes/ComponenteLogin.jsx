import '../Estilos/_Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export function ComponenteLogin({
    ValidarExistencia,
    setValidacion,
    setValidarHome,
    
  }){


    if(ValidarExistencia === false)return null;

    const desaparecer_boton =(evento)=>{
        setValidacion(false)
        setValidarHome(true)
       
        
    }
    return(
        <div className='_Loguin'>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button 
      onClick={desaparecer_boton}
      variant="dark" 
      type="submit">
        Submit
      </Button>
    </Form>
          
        </div>
        
    )
}