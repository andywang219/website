import React from "react";

const Project = () => {
    return (
        <div>
            <h1 className = "headings">Projects</h1>

            <div className = "projects">
                <img src = {require("../pictures/kkp.jpg")} alt = "kkp"/>
                <h4>Krusty Krab Pizza Online</h4>
                <div className = "overlay">
                    <p className = "text">
                        This project was my team's way of creating a website like Yelp, but for pizzas only. The website implements Google Maps API to find pizzerias near you. If the pizzeria is <q>partnered</q> with us, then upon selection, the page will redirect to the menu page. In the menu page, the user would then be able to add items to their cart and check out. This website also implements a blacklist and a registered users function, where blacklisted users are barred from purchasing and registered users receives discounts.
                        <br/>
                        <a href = "https://github.com/buenoluis007/Krusty_Krab_Pizza">Check it out on GitHub</a>
                    </p>
                </div>
            </div>

            <div className = "projects">
                <img src = {require("../pictures/cfr.jpg")} alt = "CUNY"/>
                <h4>CUNYfirst-RateMyProfessor Hybrid</h4>
                <div className = "overlay">
                    <p className = "text">
                        This project (team project) was designed to help ease the course enrollment process within the CUNY system. It implements a login screen, a search page, and a shopping cart. For this project, we limited the courses to just Computer Science courses to simplify things. After searching for a course, the user is able to choose which section of the course they want. Choosing a section will bring the user to the course info page, where rating/comments of the professor would be displayed.
                        <br/>
                        <a href = "https://github.com/buenoluis007/CUNYFirst-RateMyProfessors-Hybrid">Check it out on GitHub</a>
                    </p>
                </div>
            </div>

            <div className = "projects">
                <img src = {require("../pictures/website.jpg")} alt = "CUNY"/>
                <h4>Personal Website</h4>
                <div className = "overlay">
                    <p className = "text">
                        The inspiration behind this project was me wanting to portray myself in a more physical way rather than just a piece of paper. Whats a  better way to do that than a website. I had many ideas on how to design my website site, but in the end I thought the simple way is the best way.
                        <br/>
                        <a href = "https://github.com/andywang219/website">Check it out on GitHub</a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Project;
