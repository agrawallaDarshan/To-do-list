import React from 'react'

export const TodoItem = (props) => {

    let cardStyle = {
        width: "20rem",
        backgroundColor : "#20232a",
        color: "white",
        border: "2px solid black",
        borderRadius: "20px",
        boxShadow: "10px 10px 8px #888888"
    };
    return (
            <div className="card mx-3 my-3" style={cardStyle}>
                <div className="card-body">
                    <h4 className = "text-center">{props.todoItemObject.title}</h4>
                    <p>{props.todoItemObject.desc}</p>
                    <button className="btn btn-danger btn-sm" onClick={() => { props.onDelete(props.todoItemObject) }}><i class="fa fa-trash-o"></i></button>
                    <button className="btn mx-2" id={props.todoItemObject.sno} onClick={() => { props.onCheck(props.todoItemObject.sno) }}>
                        <i class="fa fa-check-square-o"style={{color:"white"}}></i>
                    </button>
                </div>
            </div>
    )
}
