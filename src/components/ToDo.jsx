import React from 'react'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

 const ToDo = ({task,toggleComplete, deleteToDo, editToDo}) => {


  return (
    <div className='toDo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
        <div><FontAwesomeIcon onClick={() => deleteToDo(task.id)}
                    icon={faTrash} className="trash" size="lg" />
            <FontAwesomeIcon onClick={()=> editToDo(task.id)} icon={faPenToSquare} size="lg" style={{color: "#65ecdc",}} />  
        </div>
    </div>
  )
}

export default ToDo
