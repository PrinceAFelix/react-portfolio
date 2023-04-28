import React from 'react'
import classes from './Project.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

import chatApp from '../../assets/chatapp.svg';
import weatherAPI from '../../assets/weatherapi.svg';
import stacker from '../../assets/stacker.svg';
import schoolCom from '../../assets/schoolcom.svg';
import othello from '../../assets/othello.svg'
import airsearch from '../../assets/airsearch.svg'
import discordbot from '../../assets/discordbot.svg'
import caoutprvw from '../../assets/caout.webm'

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
                <div className={classes['project-pin']}>
                    <ul>
                        <li>
                            <div className={classes['pin-container']}>
                                <div className={classes['pin-image']} >
                                    <video width="250px" height="auto" preload="false" playsinline="" class="elementor-video" autoplay="" loop muted="muted" controlslist="nodownload" >
                                        <source src={caoutprvw} type="video/mp4" />
                                    </video>

                                </div>
                                <div className={classes['description-container']}>
                                    <h1 className={sharedstyle['project-title']}>Chat Application</h1>
                                    <div className={classes['pin-description']} >
                                        <p className={sharedstyle.p}>A cross platform chat application that works with internet connection or bluetooth nearby connection. Sign or Sign up to start communicating, customizing profile, and view active users. Switch to bluetooth mode and start searching for nearby users. </p>
                                    </div>
                                    <span style={{ justifyContent: 'flex-end' }} className={classes['project-tech-list']}>
                                        <ul className={classes.ul}>
                                            <li>Flutter</li>
                                            <li>Firebase</li>
                                            <li>Dart</li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={classes['pin-container']}>
                                <div className={classes['description-container']}>
                                    <h1 className={sharedstyle['project-title']}>Discord Bot</h1>
                                    <div className={classes['pin-description']} >
                                        <p className={sharedstyle.p}>Built and construct a bot for Uncle Tetsu Ottawa to automate simple tasks. Calculates how many products it needs for a specific number of needs. Add/Remove in a todo run by Firebase, and more features to be implemented. </p>
                                    </div>
                                    <span className={classes['project-tech-list']}>
                                        <ul className={classes.ul}>
                                            <li>JavaScript</li>
                                            <li>NodeJs</li>
                                            <li>Firebase</li>
                                        </ul>
                                    </span>
                                </div>
                                <div className={classes['pin-image']} >
                                    <div className={classes['image-container']}>
                                        <div className={classes.overlay} />
                                        <img className={classes.image} src={discordbot} alt="discord-bot-poster" />

                                    </div>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
                <div className={classes["project-list"]}>

                    <ul>
                        <li>
                            <ProjectLayout delay={100} img={chatApp} link={"https://github.com/PrinceAFelix/Flutter-Chat-Application"} title={"Chat Application"} description={projectDescription[0]} techList={["Flutter", "Firebase", "Dart"]} />
                        </li>
                        <li>
                            <ProjectLayout delay={250} img={weatherAPI} link={"https://princeafelix.github.io/Weather-API/"} title={"Weather API"} description={projectDescription[1]} techList={["HTML", "CSS", " JavaScript", "OpenWeatherAPI"]} />
                        </li>
                        <li>
                            <ProjectLayout delay={350} img={airsearch} link={"https://github.com/PrinceAFelix/AirSearch"} title={"AirSearch"} description={projectDescription[5]} techList={["React"]} />

                        </li>
                        <li>
                            <ProjectLayout delay={450} img={schoolCom} link={"https://github.com/PrinceAFelix/CST8359-NET-Enterprise-Application-Development/tree/main/Assignment2"} title={"School Community MS"} description={projectDescription[3]} techList={["C#", "Razor pages", "Azure"]} />
                        </li>
                        <li>
                            <ProjectLayout delay={550} img={othello} link={"https://github.com/PrinceAFelix/Othello"} title={"Othello"} description={projectDescription[4]} techList={["Java", "Java Swing"]} />
                        </li>
                        <li>
                            <ProjectLayout delay={650} img={stacker} link={"https://github.com/PrinceAFelix/Stacker-Game"} title={"Stacker"} description={projectDescription[2]} techList={["Java", "Java Swing"]} />
                        </li>
                    </ul>
                </div>
            </div>

            <div className={sharedstyle['end-section']} />
        </section>
    )
}
