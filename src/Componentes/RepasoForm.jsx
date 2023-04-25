import {useRef} from 'react'
export function RepasoForm({
  EleccionRanking,
  }) 
  {
  const inputRef =useRef(null);
  const handleSubmit =(evento)=>{
    evento.preventDefault();
    console.log(inputRef.current.value);
  }
  if (EleccionRanking === false)return null;
  return(
      <>
      <h1>putos</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleSubmit}> subir</button>
    </form></>
  )
  
}