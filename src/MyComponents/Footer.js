import React from 'react'

export const Footer = () => {

    let footerStyle = {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        border: "2px solid black",
        backgroundColor : "#20232a",
        color: "white",
        fontWeight: "bold"
    };

    return (
        <footer className= "text-light py-2 text-center" style = {footerStyle}>
            React Native - Todos List | Copyrights &#169; myTodosList.com
        </footer>
    )
}
