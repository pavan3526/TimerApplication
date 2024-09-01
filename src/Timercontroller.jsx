import { useState } from "react";
import Timerview from './Timerview';

const Timercontroller = () => {

    const [time, setTime] = useState(new Date(0));
    const [timerInterval, setTimerInterval] = useState(null);

    function startClicked() {
        const step = 10;
        if (!timerInterval) {
            setTimerInterval(setInterval(() => {
                setTime((oldTime) => {
                    const newMs = oldTime.getTime() + step;
                    return new Date(newMs);
                });
            }, step));
        }
    }

    function pauseClicked() {
        clearInterval(timerInterval);
        setTimerInterval(null);
    }

    function resetClicked() {
        clearInterval(timerInterval);
        setTimerInterval(null);
        setTime(new Date(0));
    }

    return (
        <Timerview
            minutes={time.getMinutes()}
            seconds={time.getSeconds()}
            milliseconds={Math.floor(time.getMilliseconds() / 10)}
            startClicked={startClicked}
            pauseClicked={pauseClicked}
            resetClicked={resetClicked}
        />
    );
};

export default Timercontroller;
