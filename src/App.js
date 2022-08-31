import React, { useState } from "react";

function App() {
  
  const [gastos, setGastos] = useState([1500, 300, 450])
  console.log(gastos)

  return (
    < div className="App">
      <Contador gastos={gastos}/>
      <GastosMes gastos={gastos}/>
      <AgregarGasto setGastos={setGastos}/>
    </ div>
  );
}

function Contador ({gastos}){

  let gastosTotal = 0;
  for(let i = 0 ; i<gastos.length; i++)
  gastosTotal += Number(gastos[i])

  return (
  <div> Gasto mensual: {gastosTotal}</div>
  )
}

function GastosMes ({gastos}){

return (
  <ul>
    {gastos.map ((gasto, index) =>( <li key = {index}>{gasto}</li>
    ))}
  </ul>
);
}

function AgregarGasto ({setGastos}) {
  function handleSubmit (event) {
    event.preventDefault ();
    const gasto = event.target.elements.gasto.value;
    setGastos (e => [...e, gasto])
    console.log (gasto)
  }

return (
  <form onSubmit = {handleSubmit}>
    <input  id = "gasto"/>
    <button type="Submit"> Agregar gasto </button>
  </form>
  )
}

export default App;