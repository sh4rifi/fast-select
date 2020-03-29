import React from 'react';
import './style.scss';

function Cell(props) {
    const {value, handleClick, className} = props;


    let classes = ["cell", className];

    if (value == "REMOVED")
        classes.push("cell-hidden");

    return (
        <div className={classes.join(" ")} onClick={handleClick}>
            <span className="display-center">{value}</span>
        </div>
    )
}

export default Cell;
