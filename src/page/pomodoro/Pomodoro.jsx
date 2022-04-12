import React, { useState } from "react";

import Circular from "../../components/circular/Circular";

import Button, { ButtonOutLine } from "./../../components/button/Button";

import './pomodoro.scss'
import clockType from './../../constants/clock';

const Pomodoro = () => {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState('25');
	const [state, setState] = useState(0);
    const handleStart = (status) => {
        setStart(status);
    };
    return (
        <div className="pomodoro">
            <header className="pomodoro--header">
				{
					clockType.map((item,index)=>{
						return(
							<div className={`${state===index?'active':''}`} key={index} onClick={()=>{
								setStart(false)
								setState(index)
								setTime(item.time)
							}}>
							{item.name}
						</div>
						)
					})
				}
			</header>
            <div className="pomodoro--main">
                <Circular start={start} timer={`${time}:00`} />
                <div className="btn-group flex lg:flex-col lg:gap-2  lg:justify-center lg:h-full">
                    <Button
                        onClick={() => handleStart(true)}
                        className="mr-5"
                        title="Start"
                    ></Button>
                    <ButtonOutLine
                        onClick={() => handleStart(false)}
                        title="Stop"
                    ></ButtonOutLine>
                </div>
            </div>
        </div>
    );
};

export default Pomodoro;
