import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {incrementByAmount, reset } from "./counterSlice";

function App() {
    const dispatch = useDispatch() // englobar a função
    const cont = useSelector((state) => state.counter.value)
   
  // const [count,setCount] = useState(JSON.parse(localStorage.getItem('count'))||0);
  const[text,setText] = useState(JSON.parse(localStorage.getItem('text'))||"contagem")
  const[sum,setSum] = useState(0)

 
  return (
    <div className="App">
      <h1> Twist</h1>
      <h3>o valor de {text} é {cont} </h3>
      <input value={sum} onChange = {(e)=> setSum(e.target.value)}/> 
      <button onClick ={() => dispatch(incrementByAmount(+sum))}> +</button>
      <button onClick ={() => dispatch(incrementByAmount(-(+sum)))}> - </button>
      <button onClick ={() => dispatch(reset())}> reset </button> 
      <input value={text} onChange = {(e)=> setText(e.target.value)}/>
    </div>
  );
}

export default App;