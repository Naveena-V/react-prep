import HigherOrderComponent from "./HigherOrderComponent";

export default HigherOrderComponent(function Hover({
  counter,
  handleCounterIncrement,
}) {
  return (
    <div>
      <h2 onMouseOver={handleCounterIncrement}>
        Mouse hovered {counter} times
      </h2>
    </div>
  );
});
