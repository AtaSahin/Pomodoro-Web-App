import React, { useState, useEffect } from "react";
import PomodoroTimer from "./PomodoroTimer";

const LongBreak = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const handleStart = () => {
    if (!isRunning) {
      setMinutes(15);
      setSeconds(0);
      setIsRunning(true);
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setMinutes(15);
      setSeconds(0);
      setIsRunning(true);
    }
  };

  return (
    <div className="timerContainer1">
      <h1 className="timerText">{`${minutes
        .toString()
        .padStart(2, "00")}:${seconds.toString().padStart(1, "5")}`}</h1>
      {!isRunning ? (
        <button
          className="startButton"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
      ) : (
        <button
          className="pauseButton"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default LongBreak;
