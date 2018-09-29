import React, { Component } from 'react';
import { Typography, Grid, Paper, Button, MuiThemeProvider,
    createMuiTheme } from '@material-ui/core';
import './styleItUp.css';

class Projects extends Component {

    render() {
        return (
            <div className="flexCenter">
                <h1 className="headings">Projects</h1>
                <MuiThemeProvider theme={createMuiTheme({
                    palette: {
                        primary: { main: "#2196f3" }
                    }
                })}>
                    <Grid container spacing={8} className="flexRow" style={{ marginTop: "15px", width: "100%" }}>
                        <Grid item xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                            <Paper className="projects">
                                    <img src = {require("../pictures/kkp.jpg")} alt = "pizza" />
                                    <Typography className = "flexRow " variant = "display1" style = {{ color: "black", padding: "10px 0" }}>
                                        Krusty Krab Pizza
                                    </Typography>
                                    <div className = "overlay flexCenter">
                                        <div className="text">
                                        This project was my team's way of creating a website like Yelp, but mainly for pizzas. Like Yelp, our website implements Google Maps API to help locate the closest pizzerias near you. Moreover, we used the map to serve as a GPS for the delivery person. In the menu page of the website, the user will be able to add items to their cart and check out. This website also implements a blacklist and a registered users function, where blacklisted users are barred from purchasing and registered users receive discounts.
                                        <div className="flexRow">
                                            <Button variant="contained" size="large" color = "primary" style={{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px"}} href="https://github.com/buenoluis007/Krusty_Krab_Pizza" target="_blank" rel="noopener noreferrer">
                                            GitHub
                                            </Button>
                                        </div>
                                        </div>
                                    </div>
                            </Paper>
                        </Grid>
                        <Grid item xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                                <Paper className="projects">
                                        <img src={require("../pictures/cfr.jpg")} alt="cuny" />
                                        <Typography className="flexRow" variant="display1" style={{ color: "black", padding: "10px 0" }}>
                                        CUNYfirst-RateMyProfessor Hybrid
                                        </Typography>
                                        <div className="overlay flexCenter">
                                        <div className="text">
                                            This project was a team project. Our goal was to help improve the course enrollment process within CUNY. We limited the total number of courses to just Computer Science courses available at my college to simplify things. After searching for a course, the user can choose which section of the course they want. Selecting a section will redirect the user to the section information page. Moreover, the user will then be able to see the rating of the professor. If the user chooses to enroll in that section, the total seat number will decrease.
                                            <div className="flexRow">
                                            <Button variant="contained" size="large" color="primary" style={{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px" }} href="https://github.com/buenoluis007/CUNYFirst-RateMyProfessors-Hybrid" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </Button>
                                            </div>
                                        </div>
                                        </div>
                                </Paper>
                        </Grid>
                        <Grid item xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                            <Paper className="projects">
                            <img src={require("../pictures/website.jpg")} alt="web" />
                            <Typography className="flexRow " variant="display1" style={{ color: "black", padding: "10px 0" }}>
                                Personal Website
                            </Typography>
                            <div className="overlay flexCenter">
                                <div className="text">
                                The inspiration behind this project was me wanting to portray myself in a more physical way rather than just a piece of paper and what a better way to do that than a website. At first, I had many ideas about how to design my website, but in the end, I thought simplicity would be the best. Creating this website has made me realize how much I enjoy Web Development. Thus, I will be building a career towards Web Dev.
                                <div className="flexRow">
                                    <Button variant="contained" size="large" color="primary" style={{ padding: "5px 5px", margin: "5px 5px", marginTop: "5px", fontSize: "10px" }} href="https://github.com/andywang219/website" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                    </Button>
                                </div>
                                </div>
                            </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
          </div>
        )
    }
}
export default Projects;
