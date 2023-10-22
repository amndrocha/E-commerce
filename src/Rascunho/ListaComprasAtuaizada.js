import {useEffect, useState } from "react"
function App(){
    const qtdsData = JSON.parse(localStorage.getItem("notas"))
    const [qtd, setQtd] = useState('')
    const [img,setImg] = useState()
    const [cor, setCor] = useState('')
    const [des,setDes] = useState()
    const [qtds, setQtds] = useState(qtdsData || [])
    
    useEffect(() => {
        localStorage.setItem("notas", JSON.stringify(qtds))
    }, [qtds,qtd])

    const addQtd = (e) => {
        e.preventDefault()
        qtds.push({qtd:qtd,img:img,cor:cor,des:des})
        setQtd('')
    }
    const removeQtd = (title) => {
        setQtds(qtds.filter((qtd) => qtd !== title))
    }
    const imagem = {maxWidth:'200px'}

    return (
        <div>
            <h1>Lista de Compra</h1>
            <h3> {qtds.length} itens</h3>
            {qtds.map((qtd) => (
                <div key={qtd}>
                    <p>{qtd.qtd}</p>
                    <img style={imagem} src={qtd.img}/>
                    <p>{qtd.cor}</p>
                    <p>{qtd.des}</p>
                    <button onClick={() => removeQtd(qtd)}>x</button>
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