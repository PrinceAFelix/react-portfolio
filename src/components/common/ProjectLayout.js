import React, { useState, useEffect, useRef } from 'react';
import sharedstyle from '../styles/Sharedstyles.module.css';
import classes from './Layout.module.css';

const ProjectLayout = (props) => {
    const [onOpen, setOnOpen] = useState(false);
    const targetRef = useRef(null);

    const handSetOnClick = () => {
        setOnOpen(!onOpen);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => {
                        setOnOpen(true);
                        if (targetRef.current) {
                            targetRef.current.querySelector('.lazy').style.backgroundImage = `url(${targetRef.current.querySelector('.lazy').dataset.src})`;
                            targetRef.current.querySelector('.lazy').classList.remove('lazy');
                        }
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
    }, [targetRef, props.delay]);

    const screenStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div ref={targetRef} className={classes['project-container']}>
            <div onClick={handSetOnClick} className={classes.laptop}>
                <div data-src={props.img} style={screenStyle} className={`${classes['laptop_screen']} lazy ${onOpen ? classes['laptop-open'] : ''}`}></div>
                <div className={`${classes['laptop-base']} ${onOpen ? classes['open'] : ''}`}></div>
            </div>

            <a className={classes.a} href={props.link} rel="noreferrer" target='_blank'>
                <div className={classes['project-details']}>
                    <h1 className={classes['project-title']}>{props.title}</h1>
                    <p className={`${sharedstyle.p} ${classes.p}`}>{props.description}</p>
                    <span className={classes.span}>
                        <ul className={classes.ul}>
                            {props.techList.map((tl) => (
                                <li key={tl}>{tl}</li>
                            ))}
                        </ul>
                    </span>
                </div>
            </a>

            <div className={classes.surface} />
        </div>
    );
};

export default ProjectLayout;
