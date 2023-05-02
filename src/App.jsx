import {ComponenteLogin} from './Componentes/ComponenteLogin'
import {ComponenteHome} from './Componentes/ComponenteHome'
import './Estilos/PagPrincipal.css'
import { useState } from 'react'
import { Presentacion } from './Componentes/Presentacion'


function App() {
  
  const[Validacion, setValidacion]=useState(true)
  const[ValidarHome, setValidarHome]=useState(false)
 

  return (
    <>
    <Presentacion></Presentacion>
    
    
       
    <ComponenteLogin 
      setValidacion={setValidacion} 
      ValidarExistencia = {Validacion } 
      setValidarHome={setValidarHome}
      
      >
      </ComponenteLogin>
      
      <ComponenteHome
       setValidarHome ={setValidarHome}
       setValidacion ={setValidacion}
       ValidarInicio ={ValidarHome } 
       >
      </ComponenteHome> 
      </>

  )
}

export default App
