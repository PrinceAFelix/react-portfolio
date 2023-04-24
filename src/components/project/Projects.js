import React from 'react'
import classes from './Project.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

import chatApp from '../../assets/chatapp.png';
import weatherAPI from '../../assets/weather.png';
import stacker from '../../assets/stacker.png';
import schoolCom from '../../assets/schoolcom1.png';
import othello from '../../assets/othello.png'
import airsearch from '../../assets/airsearch1.png'

import ProjectLayout from '../common/ProjectLayout'



const projectDescription = [
    "A cross platform chat application that works with internet connection or bluetooth nearby connection.",
    "A weather app clone of iPhone weather app programmed in HTML5/CSS/JAVASCRIPT with the use of openweathermap api to extract the weather data.",
    "Programmed in Java. Stacker was inspired by the arcade game Stacker. The goal of the game is to stack the cubes to the top without missing any blocks.",
    "Created a School Community Web App using ASP.NET MVC Core Application. This application implements CRUD operation. ",
    "A simple strategy board game programmed in Java. You may modify the game board color and perform live chat using Java Networking. (On going)",
    "Developing using React. A fast and easy to use we application that get you the cheapest flight you need. (On going)",
]

export const Projects = () => {
    return (
        <section className={classes["project-section"]} id="projects">
            <div className={`${sharedstyle["container"]}`}>
                <h1 className={`${sharedstyle["section-title"]}`}>Projects</h1>
                <span className={`${sharedstyle["divider"]} ${sharedstyle.center}`}></span>
            </div>

            <div className={classes["project-content"]}>
                <div className={classes["project-list"]}>

                    <ul>
                        <li>
                            <ProjectLayout img={chatApp} link={"https://github.com/PrinceAFelix/Flutter-Chat-Application"} title={"Chat Application"} description={projectDescription[0]} techList={["Flutter", "Firebase", "Dart"]} />
                        </li>
                        <li>
                            <ProjectLayout img={weatherAPI} link={"https://princeafelix.github.io/Weather-API/"} title={"Weather API"} description={projectDescription[1]} techList={["HTML", "CSS", " JavaScript", "OpenWeatherAPI"]} />
                        </li>
                        <li>
                            <ProjectLayout img={airsearch} link={"https://github.com/PrinceAFelix/AirSearch"} title={"AirSearch"} description={projectDescription[5]} techList={["React"]} />

                        </li>
                        <li>
                            <ProjectLayout img={schoolCom} link={"https://github.com/PrinceAFelix/CST8359-NET-Enterprise-Application-Development/tree/main/Assignment2"} title={"School Community MS"} description={projectDescription[3]} techList={["C#", "Razor pages", "Azure"]} />
                        </li>
                        <li>
                            <ProjectLayout img={othello} link={"https://github.com/PrinceAFelix/Othello"} title={"Othello"} description={projectDescription[4]} techList={["Java", "Java Swing"]} />
                        </li>
                        <li>
                            <ProjectLayout img={stacker} link={"https://github.com/PrinceAFelix/Stacker-Game"} title={"Stacker"} description={projectDescription[2]} techList={["Java", "Java Swing"]} />
                        </li>
                    </ul>
                </div>
            </div>

            <div className={sharedstyle['end-section']} />
        </section>
    )
}
