import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({todo,deleteTask,toggleTask,enterEditMode})=>{
    return(
        <div className ="Todo">
            <p className={todo.iscompleted?"completed":"incompleted"} onClick={()=>toggleTask(todo.id)}>{todo.task}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>enterEditMode(todo.id)}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>deleteTask(todo.id)}/>
            </div>
        </div>
    )
}