import React, { useRef, useEffect } from 'react'
import classes from './Project.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

// import chatApp from '../../assets/chatapp.svg';
import weatherAPI from '../../assets/weatherapi.svg';
import stacker from '../../assets/stacker.svg';
import schoolCom from '../../assets/schoolcom.svg';
import othello from '../../assets/othello.svg'
import airsearch from '../../assets/airsearch.svg'
import discordbot from '../../assets/discordbot.svg'
import timesurf from '../../assets/timesurf.svg'
import caout from '../../assets/caout3.gif'
import porfolio from '../../assets/portfolio.svg'
import bank from '../../assets/bankms.svg'
import sensor from '../../assets/iotsensor.svg'

import ProjectLayout from '../common/ProjectLayout'





export const Projects = () => {
    const imagesRef = useRef([]);



    const projectDescription = [
        "A Python script simulates three IoT sensors, streaming real-time ice and weather data to Azure IoT Hub every 10 seconds for continuous skateway safety monitoring.",
        "Developed a responsive portfolio website using complete React that demonstrates my skills, projects and experience.",
        "iPhone weather app clone programmed in HTML5/CSS/JAVASCRIPT with the use of openweathermap api to extract the weather data.",
        "Developing with React. A fast and easy to use web application that get you the cheapest flight you need. (On going)",
        "Developed a School Community Web App with ASP.NET MVC Core Application. This application implements CRUD operation. ",
        "Designed and developed a bank management system in Java to manage bank operations. Utilized Object-Oriented Programming design pattern to construct a more efficient program.",
        "A simple strategy board game programmed in Java. You may modify the game board color and perform live chat using Java Networking. (On going)",
        "Programmed in Java. Stacker was inspired by the arcade game Stacker. The goal of the game is to stack the cubes to the top without missing any blocks.",
    ]


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.onload = () => {
                            img.classList.add(classes.loaded);
                        };
                        observer.unobserve(img);
                    }
                });
            },
            { threshold: 0.5 }
        );

        imagesRef.current.forEach(img => {
            if (img) observer.observe(img);
        });

        return () => {
            imagesRef.current.forEach(img => {
                if (img) observer.unobserve(img);
            });
        };
    }, [imagesRef]);

    return (
        <section className={classes["project-section"]} id="projects">
            <div className={`${sharedstyle["container"]}`}>
                <h1 className={`${sharedstyle["section-title"]}`}>Projects</h1>
                <span className={`${sharedstyle["divider"]} ${sharedstyle.center}`}></span>
            </div>

            <ul className={classes['main-ul']}>
                <li className={classes['main-li']}>
                    <div className={`${classes['pin-container']} `}>
                        <div className={`${classes['description-container']} ${classes.itemone} `}>
                            <h1 className={sharedstyle['project-title']}>TimeSurf</h1>
                            <div className={classes['pin-description']}>
                                <p className={sharedstyle.p}>
                                    Shift scheduler application that provides an effective workforce management. View, select, and swap shifts with co-worker as well as request a time off for your favourite holidays.
                                </p>
                            </div>
                            <span className={`${classes['project-tech-list']} ${classes.listone}`}>
                                <ul className={classes.ul}>
                                    <li>Java Spring Boot</li>
                                    <li>MongoDB</li>
                                    <li>Flutter</li>
                                    <li>ReactJS</li>
                                </ul>
                            </span>
                        </div>
                        <div className={classes['pin-image']}>
                            <div className={classes['image-container']}>
                                <div className={classes.overlay} />
                                <img
                                    ref={el => imagesRef.current[0] = el}
                                    data-src={timesurf}
                                    className={`${classes.image} ${classes.lazy}`}
                                    alt="TimeSurf"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={classes['main-li']}>
                    <div className={classes['pin-container']}>
                        <div className={classes['pin-image']}>
                            <img
                                ref={el => imagesRef.current[1] = el}
                                data-src={caout}
                                className={`${classes.mediaimg} ${classes.lazy}`}
                                width="250px"
                                height="auto"
                                alt="Chat Application"
                                loading="lazy"
                            />
                        </div>
                        <div className={`${classes['description-container']} ${classes.itemtwo} `}>
                            <h1 className={sharedstyle['project-title']}>Chat Application</h1>
                            <div className={classes['pin-description']}>
                                <p className={sharedstyle.p}>
                                    A cross platform chat application that works with internet connection or bluetooth nearby connection. Sign or Sign up to start communicating, customizing profile, and view active users. Switch to bluetooth mode and start searching for nearby users.
                                </p>
                            </div>
                            <span style={{ justifyContent: 'flex-end' }} className={`${classes['project-tech-list']} ${classes.listone}`}>
                                <ul className={classes.ul}>
                                    <li>Flutter</li>
                                    <li>Firebase</li>
                                    <li>Dart</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </li>
                <li className={classes['main-li']}>
                    <div className={`${classes['pin-container']} `}>
                        <div className={`${classes['description-container']} ${classes.itemthree} `}>
                            <h1 className={sharedstyle['project-title']}>Discord Bot</h1>
                            <div className={classes['pin-description']}>
                                <p className={sharedstyle.p}>
                                    Built and construct a bot for Uncle Tetsu Ottawa to automate simple tasks. Calculates how many products it needs for a specific number of needs. Add/Remove in a todo run by Firebase, and more features to be implemented.
                                </p>
                            </div>
                            <span className={`${classes['project-tech-list']} ${classes.listtwo}`}>
                                <ul className={classes.ul}>
                                    <li>JavaScript</li>
                                    <li>NodeJs</li>
                                    <li>Firebase</li>
                                </ul>
                            </span>
                        </div>
                        <div className={classes['pin-image']}>
                            <div className={classes['image-container']}>
                                <div className={classes.overlay} />
                                <img
                                    ref={el => imagesRef.current[2] = el}
                                    data-src={discordbot}
                                    className={`${classes.image} ${classes.lazy}`}
                                    alt="Discord Bot"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className={classes["project-list"]}>

                <ul className={classes["project-ul"]}>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={50} img={sensor} link={"https://github.com/princefelix-23/IoT-Sensor-Monitoring"} title={"IoTSensor"} description={projectDescription[0]} techList={["Python", "Azure Cloud Services"]} />
                    </li>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={100} img={porfolio} link={"https://princefelix.com/"} title={"Portfolio"} description={projectDescription[1]} techList={["React", "Responsive Design", "Netlify"]} />
                    </li>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={250} img={weatherAPI} link={"https://princeafelix.github.io/Weather-API/"} title={"Weather API"} description={projectDescription[2]} techList={["HTML", "CSS", " JavaScript", "OpenWeatherAPI"]} />
                    </li>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={350} img={airsearch} link={"https://github.com/PrinceAFelix/AirSearch"} title={"AirSearch"} description={projectDescription[3]} techList={["React", "Responsive Design"]} />
                    </li>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={450} img={schoolCom} link={"https://github.com/PrinceAFelix/CST8359-NET-Enterprise-Application-Development/tree/main/Assignment2"} title={"School/Community MS"} description={projectDescription[4]} techList={["C#", "Razor pages", "Azure"]} />
                    </li>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={550} img={bank} link={"https://github.com/PrinceAFelix/Bank-Management-System"} title={"Bank MS"} description={projectDescription[5]} techList={["Java", "Java Swing", "PostgreSQL"]} />
                    </li>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={650} img={othello} link={"https://github.com/PrinceAFelix/Othello"} title={"Othello"} description={projectDescription[6]} techList={["Java", "Java Swing"]} />
                    </li>
                    <li className={classes["project-li"]}>
                        <ProjectLayout delay={750} img={stacker} link={"https://github.com/PrinceAFelix/Stacker-Game"} title={"Stacker"} description={projectDescription[7]} techList={["Java", "Java Swing"]} />
                    </li>



                </ul>
            </div>

            <div className={`${sharedstyle['end-section']} ${classes.end}`} ></div>
        </section>

    )
}

