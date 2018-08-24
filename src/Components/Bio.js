import React from 'react';
import './styleItUp.css';

const Bio = () => {
        return (
            <div className = 'Section'>
                <h1 className = "Headings"><i className="fas fa-user"></i> About Me </h1>
                    <div className = "container-fluid">
                        <div className = "row">
                            <div className = "col-md-6">
                                <img src = {require("../pictures/IMG_7320.JPG")} alt = "Professional"  id = "pImage"/>
                            </div>
                            <div className = "col-md-6">
                                <p id = "bioText">Hi, my name is Andy Wang. I was born and raised in Chinatown, Manhattan, along with my two older sisters. My family emigrated from Fuzhou, Fujian China, which is located in southeastern China. Living in Chinatown has taught me many Chinese values and beliefs.</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
}

export default Bio;
