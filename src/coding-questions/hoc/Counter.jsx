import HigherOrderComponent from "./HigherOrderComponent";

export default HigherOrderComponent(function Counter({
  counter,
  handleCounterIncrement,
}) {
  return (
    <div>
      <div></div>
      <button onClick={handleCounterIncrement}>
        button clicked {counter} times
      </button>
    </div>
  );
});
