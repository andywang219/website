import React from 'react';
import './styleItUp.css';

const Video = () => {
    return (
        <div style = {{height: "95vh"}}>
            <video loop autoPlay muted id = "myVideo">
                <source src = {require("../video/welMov.mp4")} type = "video/mp4"></source> 
            </video>
        </div>
    );
}

export default Video;
