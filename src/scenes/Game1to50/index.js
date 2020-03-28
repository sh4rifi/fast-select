import React, {useState} from 'react';
import SectionHeader from "../../components/SectionHeader";
import Cell from "./components/Cell"
import Button from "../../components/Button";

import './style.scss';


function Game1to50() {
    const [collection, setCollection] = useState([1, 2, 3, 4])

    return (
        <section className="section-1to50">
            <SectionHeader
                h1="1 to 50"
                p="Touching from 1 to 50 as fast as you can."
            />
            <div className="component-score">
                <div className="container">
                    <div className="timer"></div>
                    <div className="level"></div>
                </div>
            </div>
            <div className="component-table">
                <div className="container">
                    <div className="container-table">
                        <div className="table">
                            {collection.map((number, i) => (
                                <Cell
                                    key={i}
                                    value={number}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="component-control">
                <div className="container">
                    <Button
                    title="Reset"
                    size="button-lg"
                    type="button-block button-primary"
                    />
                </div>
            </div>
        </section>
    );
}

export default Game1to50;
