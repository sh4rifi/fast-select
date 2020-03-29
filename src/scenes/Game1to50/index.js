import React, {useState} from 'react';
import SectionHeader from "../../components/SectionHeader";
import Cell from "./components/Cell"
import Button from "../../components/Button";
import {List} from "../../classes/List";
import './style.scss';


function Game1to50() {

    const start = 1;
    const end = 10;
    const level = 2;
    const step = 1;

    const arr = new List();

    const collections = () => {
        let collections = [];
        collections.push(arr.range(start, (end / level), step).breakUp().get());
        collections.push(arr.range(((end / level) + step), end, step).breakUp().get());
        return collections;
    };

    const [firstCollection, setFirstCollection] = useState(collections()[0]);
    const [secondCollection, setSecondCollection] = useState(collections()[1]);

    const [accepted, setAccepted] = useState([]);

    const [elapsed, setElapsed] = useState(0);
    const [increment, setIncrement] = useState(0);

    const getDescription = () => {
        let desc;
        if (target() === start)
            desc = "Game will start when you select " + target();
        else if (target() > end)
            desc = "Finish ";
        else
            desc = "Target: " + target();
        return desc;
    };

    const target = () => {
        let last = accepted.slice(-1)[0] ? accepted.slice(-1)[0] : 0;
        return (last === 0) ? start : last + step;
    };

    const startTimer = () => {
        setIncrement(
            setInterval(() => {
                setElapsed(elapsed => elapsed + 0.01);
            }, 10)
        )
    };

    const resetTimer = () => {
        setAccepted([]);
        setFirstCollection(collections()[0]);
        setSecondCollection(collections()[1]);
        stopTimer();
        setElapsed(0)
    };

    const stopTimer = () => clearInterval(increment);

    const getMillisecond = () => ('0' + elapsed * 100).slice(-2);

    const getSecond = () => ('0' + parseInt(elapsed % 60)).slice(-2);

    const getMinute = () => ('0' + Math.floor(elapsed / 60)).slice(-2);


    const handleClick = (number) => {
        if (number !== target())
            return;

        if (number === start)
            startTimer();
        else if (number === end)
            stopTimer();

        let temp_accepted = accepted;
        temp_accepted.push(number);
        setAccepted(temp_accepted);

        let next_number = (secondCollection.length > 0) ? parseInt(secondCollection.splice(0, 1)) : "REMOVED";
        let list = new List();
        let temp_firstCollection = list.set(firstCollection).replaceItem(number, next_number).get();
        setFirstCollection(temp_firstCollection)
    };

    return (
        <section className="section-1to50">
            <SectionHeader
                h1="1 to 50"
                p="Touching from 1 to 50 as fast as you can."
            />
            <div className="component-score">
                <div className="container">
                    <span className="timer">{getMinute()}:{getSecond()}:{getMillisecond()}</span>
                    <span className="level"> {getDescription()}</span>
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
