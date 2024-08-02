import { useRef, useState } from "react";

export default function StopWatch() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef({ id: null });

  const handleStart = () => {
    /* If timerRef id is not null that means we already have setInterval running background if 
    the user clicks on multiple times on start button we need clear already running intervaltimer */
    if (timerRef.current.id !== null) clearInterval(timerRef.current.id);

    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 600);
    timerRef.current.id = intervalId;
  };

  const handleStop = () => {
    clearInterval(timerRef.current.id);
  };

  const handleReset = () => {
    setTimer(0);
    handleStart();
  };

  return (
    <div>
      <h4>StopWatch</h4>
      <div className="text">{timer}</div>
      <button className="btn btn-success" onClick={handleStart}>
        Start
      </button>
      <button className="btn btn-warning" onClick={handleStop}>
        Stop
      </button>
      <button className="btn btn-danger" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
