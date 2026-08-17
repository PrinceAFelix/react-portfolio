import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classes from './Project.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

// import chatApp from '../../assets/chatapp.svg';
import weatherAPI from '../../assets/weatherapi.svg';
import appPreview from '../../assets/app-preview.webp';
import stacker from '../../assets/stacker.svg';
import schoolCom from '../../assets/schoolcom.svg';
import othello from '../../assets/othello.svg'
import airsearch from '../../assets/airsearch.svg'
import discordbot from '../../assets/discordbot.svg'
import timesurf from '../../assets/timesurf.svg'
import caout from '../../assets/caout3.webm'
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

    const projectItems = [
        <ProjectLayout
            delay={50}
            img={sensor}
            link="https://github.com/princefelix-23/IoT-Sensor-Monitoring"
            title="IoTSensor"
            description={projectDescription[0]}
            techList={["Python", "Azure Cloud Services"]}
        />,
        <ProjectLayout
            delay={100}
            img={porfolio}
            link="https://princefelix.com/"
            title="Portfolio"
            description={projectDescription[1]}
            techList={["React", "Responsive Design", "Netlify"]}
        />,
        <ProjectLayout
            delay={250}
            img={weatherAPI}
            link="https://princeafelix.github.io/Weather-API/"
            title="Weather API"
            description={projectDescription[2]}
            techList={["HTML", "CSS", "JavaScript", "OpenWeatherAPI"]}
        />,
        <ProjectLayout
            delay={350}
            img={airsearch}
            link="https://github.com/PrinceAFelix/AirSearch"
            title="AirSearch"
            description={projectDescription[3]}
            techList={["React", "Responsive Design"]}
        />,
        <ProjectLayout
            delay={450}
            img={schoolCom}
            link="https://github.com/PrinceAFelix/CST8359-NET-Enterprise-Application-Development/tree/main/Assignment2"
            title="School/Community MS"
            description={projectDescription[4]}
            techList={["C#", "Razor pages", "Azure"]}
        />,
        <ProjectLayout
            delay={550}
            img={bank}
            link="https://github.com/PrinceAFelix/Bank-Management-System"
            title="Bank MS"
            description={projectDescription[5]}
            techList={["Java", "Java Swing", "PostgreSQL"]}
        />,
        <ProjectLayout
            delay={650}
            img={othello}
            link="https://github.com/PrinceAFelix/Othello"
            title="Othello"
            description={projectDescription[6]}
            techList={["Java", "Java Swing"]}
        />,
        <ProjectLayout
            delay={750}
            img={stacker}
            link="https://github.com/PrinceAFelix/Stacker-Game"
            title="Stacker"
            description={projectDescription[7]}
            techList={["Java", "Java Swing"]}
        />,
    ];


    useEffect(() => {
        const currentImages = imagesRef.current; // capture current ref value
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    const src = el.dataset && el.dataset.src;
                    if (!src) {
                        observer.unobserve(el);
                        return;
                    }

                    if (el.tagName === 'IMG') {
                        el.src = src;
                        el.onload = () => el.classList.add(classes.loaded);
                        observer.unobserve(el);
                    } else if (el.tagName === 'VIDEO') {
                        // assign src and load video, add loaded class when data available
                        if (!el.src) el.src = src;
                        const onLoaded = () => {
                            el.classList.add(classes.loaded);
                            // attempt to autoplay muted videos
                            if (el.muted) {
                                const p = el.play();
                                if (p && typeof p.catch === 'function') p.catch(() => { });
                            }
                        };
                        el.addEventListener('loadeddata', onLoaded, { once: true });
                        try { el.load(); } catch (e) { }
                        observer.unobserve(el);
                    } else {
                        // fallback: set src if possible
                        if ('src' in el) el.src = src;
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.5 }
        );

        currentImages.forEach(node => {
            if (node) observer.observe(node);
        });

        return () => {
            currentImages.forEach(node => {
                if (node) observer.unobserve(node);
            });
        };
    }, [imagesRef]);


    return (
        <section className={classes["project-section"]} id="projects">
            <div className={`${sharedstyle["container"]}`}>
                <h1 className={`${sharedstyle["section-title"]}`}>Projects</h1>
                <span className={`${sharedstyle["divider"]} ${sharedstyle.center}`}></span>
            </div>


            <div className={classes['featured-projects']}>
                <article className={`${classes.highlight} ${classes['featured-main']}`}>
                    <div className={classes['highlight-image']}>
                        <div className={classes['image-container']}>
                            <img
                                ref={el => imagesRef.current[0] = el}
                                data-src={appPreview}
                                className={`${classes.image} ${classes.lazy}`}
                                alt="Continuefy app preview"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className={classes['highlight-content']}>
                        <h1 className={`${sharedstyle['project-title']} ${classes.highlightTitle}`}>
                            Continuefy
                        </h1>

                        <p className={`${sharedstyle.p} ${classes.highlightDesc}`}>
                            Continuefy lets you continue AI conversations across platforms
                            without losing context.
                        </p>

                        <ul className={classes['featured-ul']}>
                            <li className={classes['tech-badge']}>Next.js</li>
                            <li className={classes['tech-badge']}>Firebase</li>
                            <li className={classes['tech-badge']}>AI</li>
                            <li className={classes['tech-badge']}>Browser Extension</li>
                        </ul>

                        <Link
                            to="/continuefy"
                            className={classes['project-link']}
                        >
                            Explore project →
                        </Link>
                    </div>
                </article>

                <div className={classes['featured-grid']}>

                    <article className={`${classes.highlight} ${classes['featured-card']}`}>
                        <div className={classes['highlight-image']}>
                            <div className={classes['image-container']}>
                                <img
                                    ref={el => imagesRef.current[1] = el}
                                    data-src={timesurf}
                                    className={`${classes.image} ${classes.lazy}`}
                                    alt="TimeSurf"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className={classes['highlight-content']}>
                            <h2 className={classes.highlightTitle}>
                                TimeSurf
                            </h2>

                            <p className={`${sharedstyle.p} ${classes.highlightDesc}`}>
                                Workforce scheduling platform for viewing, swapping,
                                and managing employee shifts.
                            </p>

                            <ul className={classes['featured-ul']}>
                                <li className={classes['tech-badge']}>Spring Boot</li>
                                <li className={classes['tech-badge']}>MongoDB</li>
                                <li className={classes['tech-badge']}>Flutter</li>
                            </ul>
                        </div>
                    </article>


                    <article className={`${classes.highlight} ${classes['featured-card']}`}>
                        <div className={classes['highlight-image']}>
                            <video
                                ref={el => imagesRef.current[2] = el}
                                data-src={caout}
                                className={`${classes.mediaimg} ${classes.lazy}`}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                aria-label="Chat Application demo"
                            />
                        </div>

                        <div className={`${classes.highlightContent}`}>
                            <h2 className={classes.highlightTitle}>
                                Chat Application
                            </h2>

                            <p className={`${sharedstyle.p} ${classes.highlightDesc}`}>
                                Cross-platform messaging application supporting internet
                                and nearby Bluetooth communication.
                            </p>

                            <ul className={classes['featured-ul']}>
                                <li className={classes['tech-badge']}>Flutter</li>
                                <li className={classes['tech-badge']}>Firebase</li>
                                <li className={classes['tech-badge']}>Dart</li>
                            </ul>
                        </div>
                    </article>


                    <article className={`${classes.highlight} ${classes['featured-card']}`}>
                        <div className={classes['highlight-image']}>
                            <div className={classes['image-container']}>
                                <img
                                    ref={el => imagesRef.current[3] = el}
                                    data-src={discordbot}
                                    className={`${classes.image} ${classes.lazy}`}
                                    alt="Discord Bot"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className={classes['highlight-content']}>
                            <h2 className={classes.highlightTitle}>
                                Discord Bot
                            </h2>

                            <p className={`${sharedstyle.p} ${classes.highlightDesc}`}>
                                Automation bot for inventory calculations and task
                                management workflows.
                            </p>

                            <ul className={classes['featured-ul']}>
                                <li className={classes['tech-badge']}>Node.js</li>
                                <li className={classes['tech-badge']}>JavaScript</li>
                                <li className={classes['tech-badge']}>Firebase</li>
                            </ul>
                        </div>
                    </article>

                </div>

            </div>
            <div className={classes["project-list"]}>
                <div className={classes["project-list"]}>
                    <ul className={classes["project-ul"]}>
                        {projectItems.slice(0, 8).map((item, i) => (
                            <li className={classes["project-li"]} key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            <div className={`${sharedstyle['end-section']} ${classes.end}`} ></div>
        </section>

    )
}

