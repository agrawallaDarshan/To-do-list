import React from 'react';
import { useState } from 'react';

export const AddTodos = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    let time =  new Date().toLocaleDateString();

    function submitForm(e){
        e.preventDefault();
        if(title !== "" && content !== ""){
            props.addTodo(title,content);
            setTitle("");
            setContent("");
        }else if(title === "" & content !== ""){
            props.addTodo(time,content);
            setTitle("");
            setContent("");
        }
        else{
            alert("Please write some content to add a todo");
        }
        

        
    }

    let containerStyle = {
        marginTop: "0px",
        backgroundColor : "#2d2e2d",
        height: "350px",
        color: "white",
        fontWeight: "bold"
    }

    return (
        <div className = "container-fluid" style = {containerStyle}>
            <h3 className = "text-center" style = {{padding: "5px"}}>ADD TODO</h3>
            <form onSubmit = {submitForm}>
                <div className="mb-3">
                    <label htmlFor="title" className ="form-label" style ={{fontWeight: "bold", fontSize: "25px"}}>Title</label>
                    <input type="text" className ="form-control" value={title} onChange = {(e) =>{
                        setTitle(e.target.value)}
                    } id="title"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="todoText" className ="form-label" style ={{fontWeight: "bold", fontSize: "25px"}}>Content</label>
                    <input type="text" className ="form-control" value = {content} onChange = {(e)=>{
                        setContent(e.target.value)
                    }} id="todoText"/>
                </div>

                <button type="submit" className ="btn btn-secondary btn-sm">
                <i class="fa fa-plus"></i>
                </button>
            </form>
        </div>
    )
}
