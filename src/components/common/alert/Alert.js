import React from "react";
import sharedstyle from '../../styles/Sharedstyles.module.css'
import classes from './Alert.module.css'




export const Alert = (props) => {

    const alertStyle = {
        backgroundColor: props.err ? 'red' : '#00b7bd'
    }


    return (
        <div style={alertStyle} className={`${classes.container} ${classes[props.className]}`}>
            <p className={sharedstyle.p}>{props.err ? 'Please fill in the required field' : 'Successfully sent!'}</p>
        </div>
    )
}
