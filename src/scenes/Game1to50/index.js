import React, {useState} from 'react';
import SectionHeader from "../../components/SectionHeader";
import Cell from "./components/Cell"
import Button from "../../components/Button";
import {List} from "../../classes/List";
import './style.scss';




function Game1to50() {

    const start = 1;
    const end = 5;
    const level = 1;
    const step = 1;
    const arr = new List();



    const [firstCollection] = useState(arr.range(start, (end / level), step).breakUp().get());
    const [accepted, setAccepted] = useState([]);

    /*_______________________________________timer_________________________________________________________________*/

    const [elapsed, setElapsed] = useState(0);
    const [increment, setIncrement] = useState(0);
    const startTimer = () => {
        setIncrement(
            setInterval(() => {
                setElapsed(elapsed => elapsed + 0.01);
            }, 10)
        )

    };
    const resetTimer = () => {
        stopTimer();
        setElapsed(0);
    };
    const stopTimer = () => {
        clearInterval(increment);

    };
    const getMillisecond = () => {
        return ('0' + elapsed * 100).slice(-2);
    };
    const getSecond = () => {
        return ('0' + parseInt(elapsed % 60)).slice(-2);
    };
    const getMinute = () => {
        return ('0' + Math.floor(elapsed / 60)).slice(-2);
    };



    const handleClick = (number) => {
        if (number === start)
            startTimer();
        else if (number === end)
            stopTimer();

        let temp_accepted = accepted;
        temp_accepted.push(number);
        setAccepted(temp_accepted);

        console.log(accepted)
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
                            {firstCollection.map((number, i) => (
                                <Cell
                                    key={i}
                                    value={number}
                                    handleClick={() => handleClick(number)}
                                    className={["box", number > (end / 2) ? "selected" : "flash"].join(" ")}
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
                            handleClick={() => resetTimer()}
                            type="button-block button-primary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Game1to50;
