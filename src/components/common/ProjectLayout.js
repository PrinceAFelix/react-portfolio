import React, { useState } from 'react'
import sharedstyle from '../styles/Sharedstyles.module.css'
import classes from './Layout.module.css'

const ProjectLayout = (props) => {

    const [active, setActive] = useState(false);


    const handSetActive = () => {
        setActive(true);
    }

    const handSetNotActive = () => {
        setActive(false);
    }



    return (
        <div className={classes['project-container']}>

            <a href={props.link} target='_blank'>
                <div onMouseEnter={handSetActive} onMouseLeave={handSetNotActive} className={classes['image-wrapper']}>
                    <img className={`${classes.img} ${active ? classes.active : ""}`} src={props.img} alt="" />
                </div>
            </a>
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