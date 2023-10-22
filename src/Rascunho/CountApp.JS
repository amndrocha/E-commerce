import { useEffect, useState } from "react"

function App() {
  const [count,setCount] = useState(JSON.parse(localStorage.getItem('count'))||0);
  const[text,setText] = useState(JSON.parse(localStorage.getItem('text'))||"contagem")
  const[sum,setSum] = useState()

  useEffect(() => {
    console.log('useEffect')
    localStorage.setItem('count',JSON.stringify(count))
    localStorage.setItem('text',JSON.stringify(text))
  },[count,text])

  return (
    <div className="App">
      <h1> Twist</h1>
      <h3>o valor de {text} {count} </h3>
      <input value={sum} onChange = {(e)=> setSum(e.target.value)}/> 
      <button onClick ={() =>setCount(count + (+sum))}> +</button>
      <button onClick ={()=> setCount(count - (+sum))}> - </button>
      <button onClick ={()=> setCount(0)}> reset </button>
      <input value={text} onChange = {(e)=> setText(e.target.value)}/>
    </div>
  );
}

export default App;
