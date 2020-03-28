import React from 'react';
import './style.scss';

function Cell(props) {
    const {value, handleClick, className} = props

    return (
        <div className="cell" onClick={handleClick} className={className}>
            <span>{value}</span>
        </div>
    )
}

export default Cell;
