import React from 'react';
import {IconsManifest} from 'react-icons'
import {GenIcon} from 'react-icons'
export default function Todo({ todos, completeTask, removeTask}) {




    return todos.map((todo,index) => (
    <div className= {todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
        <div className="todo-text">{todo.text}</div>
        <div className="icons" key={todo.id}>
        <GenIcon className={todo.isComplete ?'hide' : 'tick'} onClick={()=> {completeTask(todo.id) }}></GenIcon>
        <IconsManifest className='cross' onClick={() => {removeTask(todo.id) }}></IconsManifest>
        </div>
    </div>
    ))
}