import React, { useState, useEffect } from "react";

const ShortBreak = () => {
  const [minutes, setMinutes] = useState(5);
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
      setMinutes(5); // Set initial minutes
      setSeconds(0); // Set initial seconds
      setIsRunning(true);
    }
  };

  return (
    <div>
      <h1>{`${minutes.toString().padStart(2, "00")}:${seconds
        .toString()
        .padStart(1, "5")}`}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
    </div>
  );
};

export default ShortBreak;
