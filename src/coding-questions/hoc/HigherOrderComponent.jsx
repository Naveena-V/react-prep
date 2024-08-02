import { useState } from "react";

export default function HigherOrderComponent(OriginalComponent) {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleCounterIncrement = () => {
      setCounter((prev) => prev + 1);
    };

    return (
      <div>
        <OriginalComponent
          counter={counter}
          handleCounterIncrement={handleCounterIncrement}
        />
      </div>
    );
  };
  return NewComponent;
}
