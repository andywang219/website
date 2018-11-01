import React, { Component } from 'react';
import './styleItUp.css';

class Exp extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang: ["HTML", "CSS", "JavaScript", "reactJS", "nodeJS", "Java", "Python", "SQL", "Microsoft Word", "Microsoft Excel"],
            image: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-react", "fab fa-node", "fab fa-java", "fab fa-python", "fas fa-database", "fas fa-file-word", "fas fa-file-excel"],
            color: ["#e34f26", "#0037fb", "#f7df1e", "#00d8ff", "#6cc24a", "#1f4a94", "#00758f", "#0078d7", "#00a1f1", "#7cbb00"]
        }
    }
    render() {
        const skills = this.state.lang.map((data, i) => {
                return (
                    <div className = "skillSet" key = {i}>
                        <li className = "skills">
                            <i className = {this.state.image[i]} style = {{color: this.state.color[i]}}>
                        </i> {data} </li>
                    </div>
                )
            }
        )
        return (
            <div>
                <h1 className = "headings">Leadership & Experience</h1>
                    <p className = 'bodyText'><em>Ten-Tan Chinese Restaurant</em> <br/> Feb 2015 - October 2018</p>
                    <p className = "bodyText">
                        I used to work as a waiter at a privately owned restaurant. This job was like a combination of many jobs. I learned how to adapt and help out other employees when the workload began to build up. Even though this job is not related to the Computer Science field, it has taught me many skills that are applicable. I've learned
                            <li>how to work in an agile environment,</li> 
                            <li>how to communicate with other employees, </li> 
                            <li>how to solve issues when they arise, </li>
                            <li>and most importantly how anything is possible if you stay committed. </li>
                    </p>
                <h1 className = "subHeadings">Skill Set</h1>
                <div id = "skillBlock"> {skills} </div>
            </div>
        )
    }
}

export default Exp;
