import React, { Component } from 'react';
import Bio from './Bio';
import Projects from './Projects';
import Exp from './Exp';
import Contact from './Contact';
let Navbar = require("react-bootstrap/lib/Navbar");
let NavItem = require("react-bootstrap/lib/NavItem");
let Nav = require("react-bootstrap/lib/Nav");


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ref: ""
        }
        this.handleScrollToElement = this.handleScrollToElement.bind(this);
        this.welcome = React.createRef();
        this.bio = React.createRef();
        this.proj = React.createRef();
        this.exp = React.createRef();
        this.contact = React.createRef();
    }

    componentDidMount() {
        this.handleScrollToElement();
    }

    componentDidUpdate() {
        this.handleScrollToElement();
    }

    // Handles the navbar clicks
    handleScrollToElement(event) {
         if(this.state.ref === "welcome") {
             this.welcome.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if(this.state.ref === "bio") {
             this.bio.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if (this.state.ref === "proj") {
             this.proj.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if (this.state.ref === "exp") {
             this.exp.current.scrollIntoView({behavior: "smooth", block: "start"});
         } else if (this.state.ref === "contact") {
             this.contact.current.scrollIntoView({behavior: "smooth", block: "start"});
         }

    }

    render() {

        return (
            <div style = {{height: "100vh"}}>
                <Navbar id = "navbar" collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                             <img 
                                ref = {this.welcome}
                                id = "brand"
                                onClick = { () => {
                                    this.setState({ref: "welcome"})}}
                                src = {require("../pictures/logo.jpg")}
                                alt = "logo" >
                            </img>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem
                                className = "navLink"
                                ref = {this.about}
                                onClick = { () => {
                                    this.setState({ref: "bio"})}}><i className="fas fa-user" style = {{margin: "0 4px"}}></i>About Me
                            </NavItem>
                            <NavItem
                                className = "navLink"
                                ref = {this.proj}
                                onClick = { () => {
                                    this.setState({ref: "proj"})}}><i className="fas fa-project-diagram" style = {{margin: "0 4px"}}></i> Projects
                            </NavItem>
                            <NavItem
                                className = "navLink"
                                ref = {this.about}
                                onClick = { () => {
                                    this.setState({ref: "exp"})}}><i className = "fas fa-briefcase" style = {{margin: "0 4px"}}></i>Experience
                            </NavItem>
                            <NavItem
                                className = "navLink"
                                ref = {this.about} onClick = { () => {
                                    this.setState({ref: "contact"})}}><i className="fas fa-address-book" style = {{margin: "0 4px"}}></i>Contact Me
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <div ref = {this.welcome} id = "gImage">
                    <div id = "gHeader">
                        <h1 id = "gHeading1"> Ni Hao & Welcome! </h1>
                        <p id = "gHeading2"> I'm Andy! </p>
                    </div>
                </div>

                <div className = "downArrow">
                    <a className = "scroll-down" onClick = { () => {this.setState({ref: "bio"})}}>
                        <span className = "glyphicon glyphicon-chevron-down"></span>
                    </a>
                </div>

                <div className = "section" ref = {this.bio}>
                    < Bio />
                </div>

                <div className = "smSection" ref = {this.proj}>
                    < Projects />
                </div>

                <div className = "smSection" style = {{marginBottom: "100px"}} ref = {this.exp}>
                    < Exp />
                </div>

                <div id = "contact" ref = {this.contact}>
                    < Contact />
                </div>
            </div>
        );
    }
}

export default MainPage;
