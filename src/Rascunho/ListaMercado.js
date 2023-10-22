import {useEffect, useState } from "react"
function App(){
    const notesData = JSON.parse(localStorage.getItem("notas"))
    const [note, setNote] = useState('')
    const [img,setImg] = useState()
    const [notes, setNotes] = useState(notesData || [])
    
    useEffect(() => {
        localStorage.setItem("notas", JSON.stringify(notes))
    }, [notes, note])

    const addNote = (e) => {
        e.preventDefault()
        notes.push({img:img,nome:note})
        setNote('')
    }
    const removeNote = (title) => {
        setNotes(notes.filter((note) => note !== title))
    }
    const imagem = {maxWidth:'200px'}

    return (
        <div>
            <h1>Lista de Compra</h1>
            <h3> {notes.length} itens</h3>
            {notes.map((note) => (
                <div key={note}>
                    <img style={imagem} src={note.img}/>
                    <p>{note.nome}</p>
                    <button onClick={() => removeNote(note)}>x</button>
                </div>
            ))}
            <form onSubmit={addNote}>
                <input value={note} placeholder="item" onChange={(e) => setNote(e.target.value)}/>
                <input value={img} placeholder="url"onChange={(e) => setImg(e.target.value)}/>
                <button>adicionar</button>
            </form>
        </div>

    );
}
export default App;