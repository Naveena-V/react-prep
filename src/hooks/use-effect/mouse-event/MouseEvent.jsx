import { useEffect, useState } from "react";

export default function MouseEvent() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const logMousePosition = (e) => {
    console.log("event - mousemove");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect is called - mousemove");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("mousemove cleanup called");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <div>
        Pos-x{x} Pos-y{y}
      </div>
    </div>
  );
}
