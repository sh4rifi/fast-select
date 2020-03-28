import React from 'react';
import './style.scss';

function Cell(props) {
    const {value, handleClick, className} = props

    return (
        <div className={["cell", className].join(" ")} onClick={handleClick}>
            <span className="display-center">{value}</span>
        </div>
    )
}

export default Cell;
