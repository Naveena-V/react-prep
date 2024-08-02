import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UseEffectContainer from "./hooks/use-effect/UseEffectContainer";
import UseContextContainer from "./hooks/use-context/UseContextContainer";
import UseMemoContainer from "./hooks/use-memo/UseMemoContainer";
import UseCallbackContainer from "./hooks/use-callback/UseCallbackContainer";
import UseReducerContainer from "./hooks/use-reducer/UseReducerContainer";
import UseRefContainer from "./hooks/use-ref/UseRefContainer";
import StopWatch from "./coding-questions/stopwatch/StopWatch";
import Posts from "./coding-questions/pagination/Posts";
import Counter from "./coding-questions/hoc/Counter";
import Hover from "./coding-questions/hoc/Hover";

function App() {
  return (
    <div className="App mb-4">
      {/* Commonly used react hooks */}
      <UseEffectContainer />
      <UseContextContainer />
      <UseMemoContainer />
      <UseCallbackContainer />
      <UseReducerContainer />
      <UseRefContainer />
      {/* Coding questions */}
      <StopWatch />
      <Posts />
      <Counter />
      <Hover />
    </div>
  );
}

export default App;
