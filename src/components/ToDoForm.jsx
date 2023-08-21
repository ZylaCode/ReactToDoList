import React, { useState } from 'react';



 const ToDoForm = ({addToDo}) => {
    const [value, setValue]= useState('')

const handleSubmit=(e)=>{
    e.preventDefault();
    if (value) {
          // add todo
          addToDo(value);
          // clear form after submission
          setValue('');
        }    
}

  return (
    <div>
<form onSubmit={handleSubmit} className='form'>
<input onChange={(e)=>setValue(e.target.value)} type='text' className='taskInput' placeholder='Before you forget it, add it!' value={value}/>
<button type='submit' className='button'>Add Task</button>


</form>

    </div>
  )
}

export default ToDoForm
