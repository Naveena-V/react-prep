import { useMemo, useState } from "react";

export default function CounterMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={() => setCounterOne(counterOne + 1)}>
          counterOne - {counterOne}
        </button>
        <p>{isEven ? "Even" : "Odd"}</p>
      </div>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        counterTwo - {counterTwo}
      </button>
    </div>
  );
}
