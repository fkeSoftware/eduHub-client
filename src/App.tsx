import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="App container">
      <br />
      <div>
        <button className="borderless-btn success-btn rounded-btn default-btn middle-btn">
          SUCCESS
        </button>
        <button className="borderless-btn info-btn rounded-btn default-btn middle-btn">
          INFO
        </button>
        <button className="borderless-btn warning-btn rounded-btn default-btn middle-btn">
          WARNING
        </button>
        <button className="borderless-btn danger-btn rounded-btn default-btn middle-btn">
          DANGER
        </button>
        <button className="borderless-btn light-btn rounded-btn default-btn middle-btn">
          LIGHT
        </button>
        <button className="borderless-btn dark-btn rounded-btn default-btn middle-btn">
          DARK
        </button>
        <button className="borderless-btn mute-btn rounded-btn default-btn middle-btn">
          MUTED
        </button>
        <button className="borderless-btn primary-btn rounded-btn default-btn middle-btn">
          PRIMARY
        </button>
        <button className="borderless-btn secondary-btn rounded-btn default-btn middle-btn">
          SECONDARY
        </button>
      </div>

      <div>
        <p className="first-head header-light-mode">FIRST HEAD light</p>
        <p className="first-head header-dark-mode">FIRST HEAD dark</p>
        <p className="sub-head sub-head-light-mode">FIRST HEAD light</p>
        <p className="sub-head sub-head-dark-mode">FIRST HEAD dark</p>
        <p className="text text-dark-mode">Normal Text Dark</p>
        <p className="text text-light-mode">Normal Text Light</p>
        <p className="small-text small-text-light-mode">Small Text Light</p>
        <p className="small-text small-text-dark-mode">Small Text Dark</p>
      </div>
    </div>
  );
}

export default App;
