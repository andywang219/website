import React from 'react';
import './styleItUp.css';

const Contact = () => {
    return (
        <div style = {{display: "inline-block", marginTop: "40px"}}>
            <h2 id = "headings">Contact Me!</h2>
            <div>
                <a href = "https://www.facebook.com/andy.wang.52035" target = "_blank" rel = "noopener noreferrer"><i className = "fab fa-facebook-square fa-3x" style = {{color: "rgb(59, 89, 152)"}}></i></a>
                <a href = "https://www.linkedin.com/in/andy-wang-9063a215b/" target = "_blank" rel = "noopener noreferrer"><i className = "fab fa-linkedin fa-3x" style = {{color: "rgb(0, 119, 181)"}}></i></a>
                <a href = "https://github.com/andywang219" target = "_blank" rel = "noopener noreferrer"><i className = "fab fa-github-square fa-3x " style = {{color: "rgb(0, 0, 0)"}}></i></a>
                <address><a href = "mailto:andywang219@gmail.com"><i className = "fas fa-envelope fa-3x" style = {{color: "rgb(137, 25, 229)"}}></i></a></address>
            </div>
        </div>
    )
}

export default Contact;
