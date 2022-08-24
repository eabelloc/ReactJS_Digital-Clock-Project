import "./App.css";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import CountDown from "./components/Countdown/CountDown";
import Stopwatch from "./components/Stopwatch/Stopwatch";

function App() {
  return (
    <div className="App">
      
      <div className="DigitalClock">
        <DigitalClock />
      </div>
     
      <div className="CountDown">
        <CountDown />
      </div>
      
      <div className="Stopwatch">
        <Stopwatch />
      </div>
      
    </div>
  );
}

export default App;
