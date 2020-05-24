import React from "react";
import "./App.css";
import WeatherLocation from "./components/WeatherLocation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherLocation></WeatherLocation>
      </header> 
    </div>
  ); 
}

export default App;
