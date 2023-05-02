import '../Estilos/Ranking.css'
import '../Estilos/Titulos.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
export function ComponenteRanking({
  ViendoRanking,
  setViendoRanking
  })

  {
    
  if (ViendoRanking === false)return null;
  
  return(
    <div >    
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Top</th>
          <th>Primer Nombre</th>
          <th>Segundo Nombre</th>
          <th>Puntaje</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>5451</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>4561</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Juan</td>
          <td>Jimenez</td>
          <td>2800</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Lizet</td>
          <td>Jimenez</td>
          <td>2700</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Valentina</td>
          <td>Bandida</td>
          <td>2600</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Isa</td>
          <td>Jimenez</td>
          <td>2500</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Nicolas</td>
          <td>Marin</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>8</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>1000</td>
        </tr>
      </tbody>
    </Table>
    </div>

  )
  
}