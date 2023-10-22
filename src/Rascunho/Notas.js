import { useEffect, useState } from "react"
function App(){
    const notesData = JSON.parse(localStorage.getItem("notas"))
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState(notesData || [])
    useEffect(() => {
        localStorage.setItem("notas", JSON.stringify(notes))
    }, [note])
    const addNote = (e) => {
        e.preventDefault()
        notes.push(note)
        setNote('')
    }
    const removeNote = (title) => {
        setNotes(notes.filter((note) => note !== title))
    }
    return (
        <div>
            <h1>TWIST</h1>
            <h3>{notes.length} notas</h3>
            {notes.map((note) => (
                <div key={note}>
                    <p>{note}</p>
                    <button onClick={() => removeNote(note)}>x</button>
                </div>
            ))}
            <form onSubmit={addNote}>
                <input value={note} onChange={(e) => setNote(e.target.value)}/>
                <button>adicionar</button>
            </form>
        </div>
    )
}
export default App;
