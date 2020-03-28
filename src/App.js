import React from 'react';
import Game1to50 from "./scenes/Game1to50";
import './app.scss';

function App() {
    return (
        <div className="app">
            <div className="app-wrapper">
                <div className="app-sidebar">
                </div>
                <div className="app-content">
                    <Game1to50/>
                </div>
            </div>
            <footer className="app-footer">
                <div className="container"></div>
            </footer>
        </div>
    );
}

export default App;
