import React, { Component } from 'react';
import './styleItUp.css';

class Edu extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang: ["HTML", "CSS", "JavaScript", "reactJS", "nodeJS", "Java", "Python", "C++", "SQL"],
            image: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-react", "fab fa-node", "fab fa-java", "fab fa-python", ]
        }
    }
    render() {
        const skills = this.state.lang.map((data, i) => {
                return (
                    <div className = "skills" key = {i}>
                        <li className = "subBody"><i className = {this.state.image[i]}></i> {data} </li>
                    </div>
                )
            }
        )
        return (
            <div>
                <h1 className = "headings">
                    <i className = "fas fa-graduation-cap"></i> Education
                </h1>

                <p className = "bodyText">
                    The City College of New York
                    <br/>
                    Bachelor of Science Candidate
                    <br/>
                    Computer Science
                    <br/>
                    Anticapted Fall 2019
                </p>

                <h2 className = "headings" style = {{paddingTop: "70px"}}>Skill Set</h2>

                {skills}

            </div>
        )
    }
}

export default Edu;
