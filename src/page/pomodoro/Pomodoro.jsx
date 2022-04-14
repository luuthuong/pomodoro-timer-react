import React, { useState } from "react";

import Circular from "../../components/circular/Circular";

import Button, { ButtonOutLine } from "./../../components/button/Button";

import clockType from "./../../constants/clock";

import MyCard from "./../../components/card/MyCard";

import Player from "../../components/player/Player";

import "./pomodoro.scss";

const Pomodoro = () => {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState("25");
    const [state, setState] = useState(0);

    const handleStart = (status) => {
        setStart(status);
    };

    return (
        <div className="pomodoro">
            <div className="element  neu-shadow  ">
                <header className="element__header">
                    {clockType.map((item, index) => {
                        return (
                            <div
                                className={`${state === index ? "active" : ""}`}
                                key={index}
                                onClick={() => {
                                    setStart(false);
                                    setState(index);
                                    setTime(item.time);
                                }}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </header>
                <div className="pomodoro--main ">
                    <Circular start={start} timer={`${time}:00`} />
                    <div className="btn-group flex lg:flex-col lg:gap-2  lg:justify-center lg:h-full">
                        <Button
                            onClick={() => {
                                handleStart(true);
                            }}
                            className="mr-5"
                            title="Start"
                            icon="bx bx-play"
                        ></Button>
                        <ButtonOutLine
                            onClick={() => handleStart(false)}
                            title="Stop"
                            icon='bx bx-stop'
                        ></ButtonOutLine>
                    </div>
                </div>
            </div>
            <div className="element card">
                <MyCard
                    title="Task"
                    data={[{ title: "task" }]}
                    placeholder="Choose task"
                ></MyCard>
                <MyCard
                    data={[{ title: "music" }]}
                    placeholder="Choose music"
                >
                    <Player/>
                </MyCard>
            </div>
        </div>
    );
};

export default Pomodoro;
