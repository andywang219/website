import React from 'react';
import './styleItUp.css';

const Contact = () => {
    return (
        <div>
            <h1 id = "headings"><i className="fas fa-address-book"></i> Contact Me!</h1>
            <a href = "https://www.facebook.com/andy.wang.52035"><i className = "fab fa-facebook-square fa-3x" style = {{color: "rgb(59, 89, 152)"}}></i></a>
            <a href = "https://www.linkedin.com/in/andy-wang-9063a215b/"><i className = "fab fa-linkedin fa-3x" style = {{color: "rgb(0,119,181)"}}></i></a>
            <a href = "https://github.com/andywang219"><i className = "fab fa-github-square fa-3x fa-" style = {{color: "rgb(0,0,0)"}}></i></a>
        </div>
    )
}

export default Contact;
