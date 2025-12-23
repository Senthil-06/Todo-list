import {v4 as uuidv4} from "uuid"
import {useState} from "react"
import {Todo} from "./Todo.jsx"
import {TodoForm} from "./TodoForm.jsx"
import {EditTodoForm} from "./EditTodoForm.jsx"
export const TodoWrapper = ()=>{
    const [todos,setTodos] = useState([])

    const addTodo=(task)=>{
        const normalized = task.trim().toLowerCase();
        const existingTodo = todos.find(t=>t.task.trim().toLowerCase()===normalized);
        if(existingTodo){
            if(existingTodo.iscompleted){
                alert("Task already completed");
            }
            else{
                alert("Task already added");
            }
            return;
        }
        setTodos(
            [
                ...todos,{id : uuidv4(), task : task.trim(), iscompleted : false, isEditing : false}
            ]
        )
    }

    const deleteTask = (id)=>{
        setTodos(
            todos.filter(todo=>todo.id!==id)
        )
    }

    const toggleTask = (id)=>{
        setTodos(
            todos.map(
                todo=>todo.id===id?{...todo, iscompleted:!todo.iscompleted} : todo
            )
        )
    }

    const enterEditMode = (id)=>{
        setTodos(
            todos.map(
            todo=>todo.id===id?{...todo,isEditing:true}:todo
            )
        )
    }

    const saveEditedTask = (text,id)=>{
        setTodos(
            todos.map(
                todo=>todo.id===id?{...todo,task:text,isEditing:false}:todo
            )
        )
    }

    return(
        <div className="TodoWrapper">
            <h1>Get Things done!</h1>
            <TodoForm addTodo={addTodo} />

            {todos.map(todo=>
                todo.isEditing?<EditTodoForm key={todo.id} saveEditedTask={saveEditedTask} todo={todo}/>:

                <Todo
                key={todo.id}
                todo={todo}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode} />
            )}
        </div>
    );
}

