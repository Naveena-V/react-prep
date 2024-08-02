import CounterMemo from "./CounterMemo";

export default function UseMemoContainer() {
  return (
    <div>
      <h2>{`useMemo()`}</h2>
      <p>This component will show how to use useMemo</p>
      <CounterMemo />
    </div>
  );
}
