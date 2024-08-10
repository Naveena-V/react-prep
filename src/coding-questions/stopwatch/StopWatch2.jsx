import { useEffect, useRef, useState } from "react";

export default function StopWatch2() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setTimeout(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    console.log("running effect-----", intervalIdRef);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  console.log("ref", intervalIdRef, startTimeRef);

  function start() {
    console.log("start clicked");
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  console.log("elapsed time", elapsedTime);

  function stop() {
    setIsRunning(false);
  }

  function formatTime() {
    const hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milisecs = Math.floor((elapsedTime % 1000) / 10);

    return `${minute}:${seconds}:${milisecs}`;
  }

  return (
    <div>
      <h4>StopWatch2</h4>
      <div>
        <div>{formatTime()}</div>
        <button className="btn btn-primary" onClick={start}>
          start
        </button>
        <button className="btn  btn-danger" onClick={stop}>
          Stop{" "}
        </button>
      </div>
    </div>
  );
}
