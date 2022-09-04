import React from 'react';
import { useState } from 'react';
import Todo from './Todo';
import Todoform from './Todoform'

export default function TodoList() {


    //state Array which holds all TODOS
    const [todos, SetTodos] = useState([]);


    //Add todo to list
    const addTask = task => {
        if (!task.text) {
            return
        }
        const newTodos = [task,...todos];
        SetTodos(newTodos);
    }

    //Remove todo from list
    const removeTask = id => {
     let updatedTasks = [...todos].filter(task => task.id !== id)
     SetTodos(updatedTasks)
    }

    //Task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if(todo.id = id) {
                todo.isComplete = true;
            }
            return todo;
        })
        SetTodos(updatedTasks)
    }


    return <div>
        <Todoform addTask={addTask}></Todoform>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>;
}