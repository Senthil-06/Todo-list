import {useState} from "react"

export const TodoForm = ({addTodo})=>{
    const [value,setValue] = useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        
        if(value){
            addTodo(value);
        }
        setValue("");
    }
    return(
    <form onSubmit={handlesubmit} className="TodoForm">
        <input placeholder="What do you have in mind?" value={value} onChange={(e)=>setValue(e.target.value)} className="todo-input" type="text"/>
        <button className="todo-btn" type="submit">Add task</button>
    </form>
    );
}
