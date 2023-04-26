import React, { useRef, useImperativeHandle } from "react";


import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    const inputRef = props.inputRef;


    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    const styles = {
        width: props.name === 'nameinput' ? 215 : 530,
        height: props.name === 'messageinput' ? 150 : 30
    }


    const inputVal = props.textHolder === null ?
        props.name === 'departuredate' ? 'Departure Date' : 'Return Date' : props.textHolder;

    return (
        <div className={classes.container}>
            <label className={classes.label} htmlFor={props.label}>{props.label}</label>
            {
                <input
                    style={styles}
                    ref={inputRef}
                    className={`${classes.Input} ${props.className} ${props.textHolder === null && classes.empty} `}
                    type={props.type}
                    name={props.name}
                    value={inputVal}
                />
            }
        </div>
    )
})


export default Input;