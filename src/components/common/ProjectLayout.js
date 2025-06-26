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
        let timer;
        const currentTargetRef = targetRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timer = setTimeout(() => {
                        setOnOpen(true);

                        const lazyEl = currentTargetRef?.querySelector('.lazy');
                        if (lazyEl) {
                            lazyEl.style.backgroundImage = `url(${lazyEl.dataset.src})`;
                            lazyEl.classList.remove('lazy');
                        }
                    }, props.delay);
                }
            },
            { threshold: 0.5 }
        );

        if (currentTargetRef) {
            observer.observe(currentTargetRef);
        }

        return () => {
            if (currentTargetRef) {
                observer.unobserve(currentTargetRef);
            }
            clearTimeout(timer);
        };
    }, [props.delay]);


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
