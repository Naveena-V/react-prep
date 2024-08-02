import { useState } from "react";
import MouseEvent from "./MouseEvent";

export default function MouseEventContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <div>
        This component will show how to cleanup events for example: mousemove
        event
      </div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <MouseEvent />}
    </div>
  );
}
