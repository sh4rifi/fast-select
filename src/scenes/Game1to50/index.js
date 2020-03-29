import React, {useState} from 'react';
import SectionHeader from "../../components/SectionHeader";
import Cell from "./components/Cell"
import Button from "../../components/Button";

import './style.scss';


function Game1to50() {
    const [collection, setCollection] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

    /*_______________________________________timer_________________________________________________________________*/

    const [elapsed, setElapsed] = useState(0);

    const getMillisecond = () => {
        return ('0' + elapsed * 100).slice(-2);
    };
    const getSecond = () => {
        return ('0' + parseInt(elapsed % 60)).slice(-2);
    };
    const getMinute = () => {
        return ('0' + Math.floor(elapsed / 60)).slice(-2);
    };

    return (
        <section className="sectoin section-1to50">
            <SectionHeader
                h1="1 to 50"
                p="Touching from 1 to 50 as fast as you can."
            />
            <div className="component-score">
                <div className="container">
                    <span className="timer">{getMinute()}:{getSecond()}:{getMillisecond()}</span>
                    <span className="level"> Description</span>
                </div>
            </div>
            <div className="component-table">
                <div className="container">
                    <div className="container-table max-w-576 div-center">
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
                    <div className="max-w-576 div-center">
                        <Button
                            title="Reset"
                            size="button-lg"
                            type="button-block button-primary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Game1to50;
