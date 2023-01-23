import React from 'react';

export const Todo = (props) => {

    return (
        <li>
            <div className="todo" id={props.id}>
                <div className="todo-text">{props.title}</div>
                <div className="todo-status">{props.completed ? "Completed" : "InCompleted"}</div>
            </div>
        </li>
    )
}