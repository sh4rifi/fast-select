import React from 'react';
import './style.scss';

function Button(props) {
    const {title, handleClick, className, size, type} = props;

    const classes = "button" + " " + size + " " + type + " " + className;
    return (
        <button
            type="button"
            className={classes}
            onClick={handleClick}
        >
            {title}
        </button>
    )


}

export default Button;
