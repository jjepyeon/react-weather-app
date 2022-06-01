import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by Jane Pyeon and is open sourced on{" "}
          <a
            href="https://github.com/jjepyeon/react-weather-app"
            target="blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
