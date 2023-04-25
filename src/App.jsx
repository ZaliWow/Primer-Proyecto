import {ComponenteLogin} from './Componentes/ComponenteLogin'
import {ComponenteHome} from './Componentes/ComponenteHome'
import { ComponenteCrearPregunta } from './Componentes/ComponenteCrearPregunta'
import './App.css'
import './Estilos/PagPrincipal.css'

import { useState } from 'react'
import { FalsoVerdadero } from './Componentes/FalsoVerdadero'
import { RespuestaMultiple } from './Componentes/RespuestaMultiple'
import { RespuestaAbierta } from './Componentes/RespuestaAbierta'
import { Presentacion } from './Componentes/Presentacion'
import { RepasoForm } from './Componentes/RepasoForm'
function App() {
  
  const[Validacion, setValidacion]=useState(true)
  const[ValidarHome, setValidarHome]=useState(false)
  const[ValidarCrearPregunta, setValidarCrearPregunta]=useState(false)
  const[ElegiYN,setElegiYN]=useState(false)
  const[ElegiMultiple, setElegiMultiple]=useState(false)
  const[ElegiAbierta, setElegiAbierta]=useState(false)
  const[ElegiRanking,setElegiRanking]=useState(false)

  return (
    <>
       
       
       <ComponenteLogin 
      setValidacion={setValidacion} 
      ValidarExistencia = {Validacion } 
      setValidarHome={setValidarHome}>
      </ComponenteLogin>
      
      <ComponenteHome
      setElegiRanking={setElegiRanking}
       setValidarCrearPregunta={setValidarCrearPregunta}
       setValidarHome ={setValidarHome}
       setValidacion ={setValidacion}
       ValidarInicio ={ValidarHome } >
      </ComponenteHome> 
      <ComponenteCrearPregunta
      setElegiAbierta={setElegiAbierta}
      setElegiMultiple={setElegiMultiple}
      setElegiYN={setElegiYN}
      setValidarHome={setValidarHome}
      setValidarCrearPregunta={setValidarCrearPregunta}
      CrearPregunta={ValidarCrearPregunta }

      >  
      </ComponenteCrearPregunta> 
      <FalsoVerdadero
      setValidarCrearPregunta={setValidarCrearPregunta}
      setElegiYN={setElegiYN}
      EleccionYN={ElegiYN}
      >
      </FalsoVerdadero>

      <RespuestaMultiple
      setValidarCrearPregunta={setValidarCrearPregunta}
      setElegiMultiple={setElegiMultiple}
      EleccionMultiple={ElegiMultiple}
      >
      </RespuestaMultiple>
      <RespuestaAbierta
      setElegiAbierta={setElegiAbierta}
      setValidarCrearPregunta={setValidarCrearPregunta}
      EleccionAbierta={ElegiAbierta}
      >
        
      </RespuestaAbierta>
      <RepasoForm
      EleccionRanking={ElegiRanking}
      setValidarCrearPregunta={setValidarCrearPregunta}
      setElegiRanking={setElegiRanking}
      >
        
      </RepasoForm>
      </>

  )
}

export default App
