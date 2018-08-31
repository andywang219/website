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

    // Handles the navbar clicks
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

    render() {

        return (
            <div>
                <Navbar id = "navbar" collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a ref = {this.greet}  id = "brand" onClick = { () => {this.setState({ref: "greet"})}}>{"<AndyWang/>"}</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem className = "link" ref = {this.about} onClick = { () => {this.setState({ref: "bio"})}}>
                                About Me
                            </NavItem>
                            <NavItem className = "link" ref = {this.edu} onClick = { () => {this.setState({ref: "edu"})}}>
                                Education
                            </NavItem>
                            <NavItem className = "link" ref = {this.about} onClick = { () => {this.setState({ref: "exp"})}}>
                                Experience
                            </NavItem>
                            <NavItem className = "link" ref = {this.about} onClick = { () => {this.setState({ref: "contact"})}}>
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
                    <a className = "scroll-down" onClick = { () => {this.setState({ref: "bio"})}}>
                        <span className = "glyphicon glyphicon-chevron-down"></span>
                    </a>
                </div>

                <div className = "section" ref = {this.bio}>
                    < Bio />
                </div>

                <div className = "section" ref = {this.edu}>
                    < Edu />
                </div>

                <div className = "smSection" ref = {this.exp}>
                    < Exp />
                </div>

                <div  className = "smSection" ref = {this.contact}>
                    < Contact />
                </div>
            </div>
        );
    }
}

export default MainPage;
