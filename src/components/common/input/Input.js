import React, { useState, useImperativeHandle } from "react";


import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(!isFocused);
    };



    const inputRef = props.inputRef;


    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });




    return (
        <div className={classes.container}>
            <label className={`${classes.label} ${isFocused ? classes.focus : props.value !== '' ? classes.focus : ''}`} htmlFor={props.name}>{props.label}</label>
            {
                props.type === 'textarea' ?
                    <textarea
                        autoComplete="off"
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        name={props.name}
                        ref={inputRef}
                        className={classes.textarea}
                        value={props.value}
                        onChange={props.onChange}
                    />
                    :
                    <input
                        autoComplete="off"
                        ref={inputRef}
                        className={`${classes.Input} ${props.className}`}
                        type={props.type}
                        name={props.name}
                        value={props.value}
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        onChange={props.onChange}
                    />
            }
        </div>
    )
})


export default Input;