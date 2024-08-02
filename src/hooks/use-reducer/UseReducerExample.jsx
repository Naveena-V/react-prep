import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
