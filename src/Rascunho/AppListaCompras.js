import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add, deletar } from "./counterSlice"

function App(){
  const dispatch = useDispatch() // englobar a função
  const qtds = useSelector((state) => state.counter.value) // buscando as informações da store e colocando na const qtds

  
    //const qtdsData = JSON.parse(localStorage.getItem("notas"))
    const [qtd, setQtd] = useState(0)
    const [qtdGeral,setGeral] = useState(0)
    const [img,setImg] = useState()
    const [cor, setCor] = useState('')
    const [des,setDes] = useState()
   
    
   
    const addQtd = (e) => {
        e.preventDefault()
        dispatch(add({qtd:qtd,img:img,cor:cor,des:des}))
        setGeral(qtdGeral +(+qtd))
        setQtd(0)
        setCor('')
        setDes('')
        setImg('')
    }
    
    const removeQtd = (title) => {
        dispatch(deletar(title))
        setGeral(qtdGeral-qtd)
    }
    
    const imagem = {maxWidth:'200px'}

    return (
        <div>
            <h1>Lista de Compra</h1>
            <h3> {qtdGeral} itens</h3>
            {qtds.map((qtd) => (
                <div key={qtd}>
                    <p>{qtd.qtd}</p>
                    <img style={imagem} src={qtd.img}/>
                    <p>{qtd.cor}</p>
                    <p>{qtd.des}</p>
                    <button onClick={() => removeQtd(qtds)}>x</button>
                </div>
            ))}
            <form onSubmit={addQtd}>
                <input value={qtd} placeholder="qtd" onChange={(e) => setQtd(e.target.value)}/>
                <input value={img} placeholder="url"onChange={(e) => setImg(e.target.value)}/>
                <input value={cor} placeholder="cor"onChange={(e) => setCor(e.target.value)}/>
                <input value={des} placeholder="descrição"onChange={(e) => setDes(e.target.value)}/>
                <button>adicionar</button>
            </form>
        </div>

    );
}
export default App;