import React, {useState} from 'react'

 const EditForm = ({editToDo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editToDo(value, task.id);
        setValue('');
      };

  return (
    <form onSubmit={handleSubmit} className="ToDoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Update task</button>
  </form>
  )
}

export default EditForm