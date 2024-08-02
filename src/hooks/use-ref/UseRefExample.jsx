import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef();
  const handleInputFoucs = () => {
    inputRef.current.focus();
    inputRef.current.style.borderRadius = "1rem";
    inputRef.current.style.borderColor = "yellow";
    inputRef.current.style.color = "orange";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button className="btn btn-primary" onClick={handleInputFoucs}>
        focus
      </button>
    </div>
  );
}
