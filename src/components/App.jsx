import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const oldTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(oldTime);
  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
