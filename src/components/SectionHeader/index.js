import React from 'react';
import './style.scss';

function SectionHeader(props) {
    const {h1, p} = props;
    return (
        <div className="container">
            <header className="section-header">
                <h1>{h1}</h1>
                <p>{p}</p>
            </header>
        </div>
    );
}

export default SectionHeader;
