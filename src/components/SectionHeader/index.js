import React from 'react';

function SectionHeader(props) {
    const {h1, p} = props;
    return (
        <header className="section-header">
            <h1>{h1}</h1>
            <p>{p}</p>
        </header>
    );
}

export default SectionHeader;
