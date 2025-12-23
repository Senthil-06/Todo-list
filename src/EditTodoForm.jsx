import {useState} from "react"

export const EditTodoForm=({saveEditedTask,todo})=>{
    const [value,setValue] = useState(todo.task)

    const handlesubmit=(e)=>{
        e.preventDefault();
        saveEditedTask(value,todo.id)
    }
    return(
        <form  onSubmit={handlesubmit} className="TodoForm">
            <input type="text" placeholder="Update task" onChange={(e)=>setValue(e.target.value)} className="todo-input" value={value}/>
            <button type="submit" className="todo-btn">Modify</button>
        </form>
    )

}