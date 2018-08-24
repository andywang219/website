import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bio from './Bio';
import Edu from './Edu';
import Exp from './Exp';
import Contact from './Contact';


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ref: "bio"
        }
        this.handleScrollToElement = this.handleScrollToElement.bind(this);
        this.bio = React.createRef();
        this.edu = React.createRef();
    }

    componentDidMount() {
        this.handleScrollToElement();
    }

    handleScrollToElement(event) {
         if(this.state.ref === "bio") {
             this.bio.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if (this.state.ref === "edu") {
             this.edu.current.scrollIntoView({behavior: "smooth", block: "start"});
         }

    }

    render() {
        const clicked = () => {
            this.setState({ref: "bio"});
            this.handleScrollToElement
            console.log(this.state.ref)
        }
        return (
            <div>
                <nav id = "navbar" className = "navbar navbar-default navbar-fixed-top">
                      <div className = "container-fluid">
                            <div className = "navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
                                    <span className = "sr-only">Toggle navigation</span>
                                    <span className = "icon-bar"></span>
                                    <span className = "icon-bar"></span>
                                    <span className = "icon-bar"></span>
                                </button>
                                <a className = "navbar-brand" href="#">AndyWang</a>
                            </div>
                            <div className = "collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className = "nav navbar-nav navbar-right">
                                    <li><a id = "link" ref = {this.about} onClick = {this.setState({ref: "edu"})}>About Me</a></li>
                                    <li><a id = "link" ref = {this.edu}>Education</a></li>
                                    <li><a id = "link" ref = {this.exp}>Experience</a></li>
                                    <li><a id = "link" ref = {this.contact}>Contact Me</a></li>
                                </ul>
                            </div>
                      </div>
                </nav>


                <div id = "gImage">
                    <div id = "gHeader">
                        <h1 id = "gHeading1"> Ni Hao & Welcome! </h1>
                        <p id = "gHeading2"> This is Me!</p>
                    </div>
                </div>

                <div className = "downArrow">
                    <a className = "scroll-down" onClick = {this.handleScrollToElement}>
                        <span className = "glyphicon glyphicon-chevron-down"></span>
                    </a>
                </div>

                <div ref = {this.bio}>
                    < Bio />
                </div>

                <div ref = {this.edu}>
                    < Edu />
                </div>

                < Exp />

                < Contact />
            </div>
        );
    }
}

export default MainPage;

// <div id = 'GS'>
//     <h1 className = 'Welcome'> Ni Hao & Welcome! </h1>
//     <h2 className = 'Welcome2'> This is me </h2>
// </div>

// <a ref = "Experience" onClick = {this.handleScrollToElement}>Experience</a>
// <a ref = "Contact" onClick = {this.handleScrollToElement}>Contact</a>


// const scrollNode = ReactDOM.findDOMNode(this.refs.param);
// if (event === "bio") {
//     const scrollNode = ReactDOM.findDOMNode(this.refs.bio);
//     scrollNode.scrollIntoView({behavior: "smooth", block: "start"});
//     console.log("poop")
//     // this.bio.current.scrollIntoView({behavior: "smooth", block: "start"});
// } else if (event === "edu") {
//     // this.edu.current.scrollIntoView({behavior: "smooth", block: "start"});
//     const scrollNode = ReactDOM.findDOMNode(this.refs.edu);
//     scrollNode.scrollIntoView({behavior: "smooth", block: "start"});
//     console.log("poop")
// }
 // scrollNode.scrollIntoView({behavior: "smooth", block: "start"});
