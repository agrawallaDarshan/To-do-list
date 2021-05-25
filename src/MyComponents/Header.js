import React from 'react'
import PropTypes from 'prop-types'
import { 
    Link
  } from "react-router-dom";

export default function Header(props) {
    let ulStyle = {
        fontFamily: 'Baloo 2',
        fontWeight: "bold",
        minHeight: "70px",
        fontSize: "18px"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style = {ulStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT</Link>
                        </li>
                    </ul>
                    {props.displaySearchBar === true ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>
    )
}

//Default props
Header.defaultProps = {
    title : "My Todos List",
    displaySearchBar : true
}

//Specifying the data types of different props
Header.propTypes = {
    title : PropTypes.string,
    displaySearchBar : PropTypes.bool
}
