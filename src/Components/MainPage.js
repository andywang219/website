import React, { Component } from 'react';
import Bio from './Bio';
import Edu from './Edu';
import Exp from './Exp';
import Contact from './Contact';
let Navbar = require("react-bootstrap/lib/Navbar");
let NavItem = require("react-bootstrap/lib/NavItem");
let Nav = require ("react-bootstrap/lib/Nav");


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ref: ""
        }
        this.handleScrollToElement = this.handleScrollToElement.bind(this);
        this.handleScrollToNext = this.handleScrollToNext.bind(this);
        this.greet = React.createRef();
        this.bio = React.createRef();
        this.edu = React.createRef();
        this.exp = React.createRef();
        this.contact = React.createRef();
    }

    componentDidMount() {
        this.handleScrollToElement();
    }

    componentDidUpdate() {
        this.handleScrollToElement();
    }

    handleScrollToElement(event) {
         if(this.state.ref === "greet") {
             this.greet.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if(this.state.ref === "bio") {
             this.bio.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if (this.state.ref === "edu") {
             this.edu.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if (this.state.ref === "exp") {
             this.exp.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if (this.state.ref === "contact") {
             this.contact.current.scrollIntoView({behavior: "smooth", block: "start"});
         }

    }

    handleScrollToNext() {
        this.bio.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    render() {

        return (
            <div>
                <Navbar id = "navbar" collapseOnSelect fixedTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a ref = {this.greet}  id = "brand" onClick = { () => {this.setState({ref: "greet"})}}>Andy Wang</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem ref = {this.about} onClick = { () => {this.setState({ref: "bio"})}}>
                                About Me
                            </NavItem>
                            <NavItem ref = {this.edu} onClick = { () => {this.setState({ref: "edu"})}}>
                                Education
                            </NavItem>
                            <NavItem ref = {this.about} onClick = { () => {this.setState({ref: "exp"})}}>
                                Experience
                            </NavItem>
                            <NavItem ref = {this.about} onClick = { () => {this.setState({ref: "contact"})}}>
                                Contact Me
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;


                <div ref = {this.greet} id = "gImage">
                    <div id = "gHeader">
                        <h1 id = "gHeading1"> Ni Hao & Welcome! </h1>
                        <p id = "gHeading2"> Get to Know Me! </p>
                    </div>
                </div>

                <div className = "downArrow">
                    <a className = "scroll-down" onClick = {this.handleScrollToNext}>
                        <span className = "glyphicon glyphicon-chevron-down"></span>
                    </a>
                </div>

                <div className = "Section" ref = {this.bio}>
                    < Bio />
                </div>

                <div className = "Section" ref = {this.edu}>
                    < Edu />
                </div>

                <div className = "Section" ref = {this.exp}>
                    < Exp />
                </div>

                <div  className = "Section" ref = {this.contact}>
                    < Contact />
                </div>
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

 // <nav id = "navbar" className = "navbar navbar-default navbar-fixed-top">
 //       <div className = "container-fluid">
 //             <div className = "navbar-header">
 //                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
 //                     <span className = "sr-only">Toggle navigation</span>
 //                     <span className = "icon-bar"></span>
 //                     <span className = "icon-bar"></span>
 //                     <span className = "icon-bar"></span>
 //                 </button>
 //                 <a className = "navbar-brand" href="#">AndyWang</a>
 //             </div>
 //             <div className = "collapse navbar-collapse" id="bs-example-navbar-collapse-1">
 //                 <ul className = "nav navbar-nav navbar-right">
 //                     <li><a id = "link" ref = {this.about} onClick = { () => {this.setState({ref: "bio"})}}>About Me</a></li>
 //                     <li><a id = "link" ref = {this.edu} onClick = { () => {this.setState({ref: "edu"})}}>Education</a></li>
 //                     <li><a id = "link" ref = {this.exp} onClick = { () => {this.setState({ref: "exp"})}}>Experience</a></li>
 //                     <li><a id = "link" ref = {this.contact} onClick = { () => {this.setState({ref: "contact"})}}>Contact Me</a></li>
 //                 </ul>
 //             </div>
 //       </div>
 // </nav>
