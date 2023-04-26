import React, { useState, useEffect, useContext, useRef } from 'react'
import sharedstyle from '../styles/Sharedstyles.module.css'
import classes from './Layout.module.css'

import PortfolioContext from '../../context/portfolio-context'

const ProjectLayout = (props) => {

    const [active, setActive] = useState(false);
    const [onOpen, setOnOpen] = useState(false);

    const portfolioCtx = useContext(PortfolioContext)

    const handSetOnClick = () => {
        setOnOpen(!onOpen);
    }

    const handSetActive = () => {
        setActive(true);
    }

    const handSetNotActive = () => {
        setActive(false);
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

            {/* <a href={props.link} target='_blank'>
                <div onMouseEnter={handSetActive} onMouseLeave={handSetNotActive} className={classes['image-wrapper']}>
                    <img className={`${classes.img} ${active ? classes.active : ""}`} src={props.img} alt="" />
                </div>
            </a> */}

            {
            }
            <div onClick={handSetOnClick} className={classes.laptop}>
                <div style={screenStyle} className={`${classes['laptop_screen']} ${onOpen ? classes['laptop-open'] : ''}`}></div>
                <div className={`${classes['laptop-base']} ${onOpen ? classes['open'] : ''}`}></div>
            </div>

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
            <div className={classes.surface} />

        </div>
    )
}

export default ProjectLayout;