import React from 'react';
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {

    return (
        <>
        <div className="row d-flex justify-content-center my-5">
            <h3 className="text-center my-2">TODOS LIST</h3>
            {props.todoArrayObject.length === 0 ? "Nothing to display!! Please add todos" :
            props.todoArrayObject.map(todoItemObject => {
                return (
                <TodoItem todoItemObject = {todoItemObject} key = {todoItemObject.sno} onDelete = {props.onDelete}
                onCheck = {props.onCheck} /> 
                )
            })
            }
        </div>
        </>
    )
}
