import React, { useState } from "react";
import index from "./index.css";
import PomodoroTimer from "./components/PomodoroTimer";
import LongBreak from "./components/LongBreak";
import ShortBreak from "./components/ShortBreak";

function App() {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setActive1(false);
    setActive2(false);
  };
  const handleClick1 = () => {
    setActive1(!active1);
    setActive(false);
    setActive2(false);
  };
  const handleClick2 = () => {
    setActive2(!active2);
    setActive(false);
    setActive1(false);
  };

  return (
    <div
      className={`App ${active ? "blueBg" : ""} ${active1 ? "greenBg" : ""} ${
        active2 ? "blackBg" : ""
      }`}
    >
      <div className="timerContainer">
        <div className="timerTabs">
          <button
            className="tabText"
            onClick={handleClick}
            style={{
              backgroundColor: active
                ? "rgba(0, 0, 0, 0.15)"
                : " rgba(0, 0, 0, 0)",
            }}
          >
            Pomodoro
          </button>
          <button
            className="tabText"
            onClick={handleClick1}
            style={{
              backgroundColor: active1
                ? "rgba(0, 0, 0, 0.15)"
                : " rgba(0, 0, 0, 0)",
            }}
          >
            Short Break
          </button>
          <button
            className="tabText"
            onClick={handleClick2}
            style={{
              backgroundColor: active2
                ? "rgba(0, 0, 0, 0.15)"
                : " rgba(0, 0, 0, 0)",
            }}
          >
            Long Break
          </button>
        </div>
        {active && (
          <p>
            <PomodoroTimer></PomodoroTimer>
          </p>
        )}
        {active1 && (
          <p>
            <ShortBreak></ShortBreak>
          </p>
        )}
        {active2 && (
          <p>
            <LongBreak></LongBreak>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
