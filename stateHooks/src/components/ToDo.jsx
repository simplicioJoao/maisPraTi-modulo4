import { useState } from "react";

function ToDo() {
    const [toDos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const addToDo = () => {
        setTodos([ ... toDos, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            <button onClick={addToDo}>Adicionar Tarefa</button>

            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo