import React from 'react'
import classes from './Layout.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

const SkillLayout = (props) => {
    return (
        <div>
            <div className={classes['skill-container']}>
                <h1 className={classes.title}>{props.title}</h1>
                <div className={classes.description}>
                    <span className={sharedstyle.p}>{props.p}</span>
                </div>
            </div>
        </div>

    )
}

export default SkillLayout;