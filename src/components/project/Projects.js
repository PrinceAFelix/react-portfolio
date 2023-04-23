import React from 'react'
import classes from './Project.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

import chatApp from '../../assets/chatapp1.png';
import weatherAPI from '../../assets/weather1.png';
import stacker from '../../assets/stacker1.png';
import schoolCom from '../../assets/schoolcom1.png';
import othello from '../../assets/othello1.png'
import airsearch from '../../assets/airsearch1.png'

export const Projects = () => {
    return (
        <section className={classes["project-section"]} id="projects">
            <div className={`${sharedstyle["container"]}  ${sharedstyle.center}`}>
                <h1 className={`${sharedstyle["section-title"]}`}>Projects</h1>
                <span className={`${sharedstyle["divider"]} ${sharedstyle.center}`}></span>
            </div>

            <div className={classes["project-content"]}>
                <div className={classes["project-list"]}>

                    <div className={classes.container}>
                        <div className={classes.card}>
                            <a href="https://github.com/PrinceAFelix/Flutter-Chat-Application">
                                <div className={classes.box}>
                                    <div className={classes["card-content"]}>
                                        <img src={chatApp} alt="chatapp" />
                                        <h4>Chat Application</h4>
                                        <p>
                                            A cross platform chat application that works with internet connection or bluetooth nearby connection.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.card}>
                            <a href="https://princeafelix.github.io/Weather-API/">
                                <div className={classes.box}>
                                    <div className={classes["card-content"]}>
                                        <img src={weatherAPI} alt="weather" />
                                        <h4>Weather API</h4>
                                        <p>
                                            A weather app clone of iPhone weather app programmed in HTML5/CSS/JAVASCRIPT with the use of openweathermap api to extract the weather data.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.card}>
                            <a href="https://github.com/PrinceAFelix/Stacker-Game">
                                <div className={classes.box}>
                                    <div className={classes["card-content"]}>
                                        <img src={stacker} alt="stacker" />
                                        <h4>Stacker Game</h4>
                                        <p>
                                            Programmed in Java. Stacker was inspired by the arcade game Stacker. The goal of the game is to stack the cubes to the top without missing any blocks.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.card}>
                            <a href="https://github.com/PrinceAFelix/CST8359-NET-Enterprise-Application-Development/tree/main/Assignment2">
                                <div className={classes.box}>
                                    <div className={classes["card-content"]}>
                                        <img src={schoolCom} alt="schoolcom" style={{ width: 200, height: 150 }} />
                                        <h4>School Community Web App</h4>
                                        <p>
                                            Created a School Community Web App using ASP.NET MVC Core Application. This application implements CRUD operation.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.card}>
                            <div className={classes.box}>
                                <div className={classes["card-content"]}>
                                    <img src={othello} alt="othello" />
                                    <h4>Othello Game</h4>
                                    <p>
                                        A simple strategy board game programmed in Java.<br />You may modify the game board color and perform live chat using Java Networking. (On going)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.card}>
                            <div className={classes.box}>
                                <div className={classes["card-content"]}>
                                    <img src={airsearch} alt="airsearch" />
                                    <h4>AirSearch</h4>
                                    <p>
                                        Developing using React. A fast and easy to use we application that get you the cheapest flight you need. (On going)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
