import React from 'react';
import './styleItUp.css';

const Bio = () => {
        return (
            <div className = "container-fluid">
                <h1 className = "headings">About Me</h1>
                    <div style = {{paddingTop: "50px"}}>
                            <div id = "pImage"></div>

                            <p className = "bodyText">
                                Hi, my name is Andy Wang. I was born and raised in Chinatown, Manhattan, along with two older sisters. Originally, I was planning to pursue a Bachelors of Science in Biomedical Engineering; however, I soon came to realize that BME was not for me. Getting out was easy, but choosing a new major was not. I asked a couple of my friends what major they think would be fun yet challenging. One of my friends jokingly recommended Computer Science and in my head, I was thinking, <q>that's not a bad idea</q>. And so, here I am today pursuing a Bachelors of Science in Computer Science. When people ask me to describe myself, I find it hard to do because I don't want to oversell myself and I don't like praising myself. Thus, rather than having me pull my hairs out thinking about it, I asked my closest friends. These were the top four characteristics they gave me:
                                        <dd>Dedicated</dd>
                                        <dd>Hard-Working</dd>
                                        <dd>Persistent</dd>
                                        <dd>Loving</dd>
                            </p>
                            <h1 className = "subHeadings">Education</h1>
                            <p className = "bodyText">
                                The City College of New York
                                <br/>
                                Bachelor of Science Candidate
                                <br/>
                                Computer Science
                                <br/>
                                Anticapted Fall 2019
                            </p>
                            <p className = "bodyText">
                                Academy of American Studies
                                <br/>
                                Long Island City
                                <br/>
                                High School Diploma
                                <br/>
                                June 2015
                            </p>
                        </div>
            </div>
        )
}

export default Bio;
