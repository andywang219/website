import React from 'react';
import './styleItUp.css';

const Bio = () => {
        return (
            <div>
                <h1 className = "headings"><i className="fas fa-user"></i> About Me </h1>
                    <div className = "container-fluid">
                        <div className = "row">
                            <div id = "pImage">
                            </div>
                            <div >
                                <p id = "bioText">
                                    Hi, my name is Andy Wang. I was born and raised in Chinatown, Manhattan, along with my two older sisters. My family emigrated from Fuzhou, Fujian China, which is located in southeastern China. My friends describes me as a:
                                            <li>Weird</li>
                                            <li>Hard-Working</li>
                                            <li>Persistent</li>
                                            <li>Loving</li>
                                    type of person.
                                </p>

                            </div>
                        </div>
                    </div>
            </div>
        )
}

export default Bio;
