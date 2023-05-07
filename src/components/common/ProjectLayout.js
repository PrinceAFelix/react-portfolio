import React, { useState, useEffect, useRef } from 'react'
import sharedstyle from '../styles/Sharedstyles.module.css'
import classes from './Layout.module.css'


const ProjectLayout = (props) => {

    const [onOpen, setOnOpen] = useState(false);


    const handSetOnClick = () => {
        setOnOpen(!onOpen);
    }




    const targetRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => {
                        setOnOpen(true);
                    }, props.delay);
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [targetRef]);

    const screenStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <div ref={targetRef} className={classes['project-container']}>




            <div onClick={handSetOnClick} className={classes.laptop}>
                <div style={screenStyle} className={`${classes['laptop_screen']} ${onOpen ? classes['laptop-open'] : ''}`}></div>
                <div className={`${classes['laptop-base']} ${onOpen ? classes['open'] : ''}`}></div>
            </div>

            <a className={classes.a} href={props.link} rel="noreferrer" target='_blank'>
                <div className={classes['project-details']}>
                    <h1 className={classes['project-title']}>{props.title}</h1>
                    <p className={`${sharedstyle.p} ${classes.p}`}>{props.description}</p>
                    <span className={classes.span}>
                        <ul className={classes.ul}>
                            {
                                props.techList.map((tl) => {
                                    return <li key={tl}>{tl}</li>

                                })
                            }
                        </ul>
                    </span>
                </div>
            </a>

            <div className={classes.surface} />

        </div>
    )
}

export default ProjectLayout;