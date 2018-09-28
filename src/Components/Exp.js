import React, { Component } from 'react';
import './styleItUp.css';

class Exp extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang: ["HTML", "CSS", "JavaScript", "reactJS", "nodeJS", "Java", "Python", "SQL", "Microsoft Word", "Microsoft Excel"],
            image: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-react", "fab fa-node", "fab fa-java", "fab fa-python", "fas fa-database", "fas fa-file-word", "fas fa-file-excel"]
        }
    }
    render() {
        const skills = this.state.lang.map((data, i) => {
                return (
                    <div className = "skillSet" key = {i}>
                        <li className = "skills"><i className = {this.state.image[i]}></i> {data} </li>
                    </div>
                )
            }
        )
        return (
            <div>
                <h1 className = "headings">Leadership & Experience</h1>
                    <p className = 'bodyText'><em>Ten-Tan Chinese Restaurant</em> Feb 2015-Present</p>
                    <p className = "subBody">
                        I am currently working as a waiter at a privately owned restaurant. My responsiblities include customer services, handling orders, and restocking inventory. Even though this job is not related to Computer Science, it has taught me many skills that are applicable. Examples of such skills are communication, diligence, precision, multi-tasking, and leadership.
                    </p>
                <h1 className = "subHeadings">Skill Set</h1>
                {skills}
            </div>
        )
    }
}

export default Exp;
