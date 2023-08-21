import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditForm from './EditForm';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

uuidv4();

const Wrapper = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

const addToDo=(task)=>{
    const newTask = ([...tasks,{id:uuidv4(), task:task, completed:false, isEditing:false},]);
    setTasks(newTask);
    localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const toggleComplete=(id)=>{
        const newTask = (tasks.map(task=>task.id===id?{...task, completed: !task.completed}: task));
        setTasks(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const deleteToDo = (id) => {
        const newTask = (tasks.filter((task) => task.id !== id));
        setTasks(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const editToDo = (id) => setTasks(tasks.map((task)=> task.id === id ? {...task, isEditing : !task.isEditing}: task));

    
    const editTask = (task, id) => {
        const newTask= (tasks.map((toDoItem) => toDoItem.id === id ? { ...toDoItem, task:task, isEditing: !toDoItem.isEditing} : toDoItem));
        setTasks(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

  

return (
    <div class="Wrapper">
        <ToDoForm addToDo={addToDo} />
{tasks.map((task) =>
        task.isEditing ? (
          <EditForm editToDo={editTask} task={task} />
        ) : (<ToDo task={task} key={task.id} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editToDo={editToDo}/> ))}
    </div>
  )
}

export default Wrapper
