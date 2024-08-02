import MouseEventContainer from "./mouse-event/MouseEventContainer";

export default function UseEffectContainer() {
  return (
    <div>
      <h2>{`useEffect()`}</h2>
      <div>
        This component shows how to handle side-effects, like subscibing events
        and clean-up functionality.
      </div>
      <div>Example adding mouse onmove event </div>
      <MouseEventContainer />
    </div>
  );
}
