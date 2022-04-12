import React, { useEffect, useState } from "react";

import "./circular.scss";

const Circular = (props) => {
    const [time, setTime] = useState({
        mn: 0,
        sc: 0,
    });

    let countdown = time.mn * 60 + time.sc;

    useEffect(() => {
        const getTime = props.timer.split(":");
        setTime({
            mn: parseInt(getTime[0]),
            sc: parseInt(getTime[1]),
        });
    }, [props.timer]);

    useEffect(() => {
        const circle = document.querySelector("circle");
        const setValue = () => {
            let newcountdown = time.mn * 60 + time.sc;
            time.sc--;
            if (time.sc < 0) {
                time.sc = 59;
                time.mn--;
            }
            setTime({
                sc: time.sc,
                mn: time.mn,
            });
            circle.style.strokeDashoffset =
                440 - (440 * newcountdown) / countdown;
            if (time.sc <= 0 && time.mn <= 0) {
                circle.style.strokeDashoffset = 440;
                clearInterval(initInterval);
            }
        };
        const initInterval = props.start && setInterval(setValue, 1000);
        !props.start && clearInterval(initInterval);
        return () => {
            initInterval && clearInterval(initInterval);
        };
    }, [props.start]);

    return (
        <div className="circular">
            <div className="outer neu-shadow">
                <div className="inner shadow-inset">
                    <div className="time">{`${time.mn}:${("0" + time.sc).slice(
                        -2
                    )}`}</div>
                </div>
            </div>
            <svg>
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#00F260" />
                        <stop offset="100%" stopColor="#FAFFD1" />
                    </linearGradient>
                </defs>
                <circle />
            </svg>
        </div>
    );
};

export default Circular;
