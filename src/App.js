import React from "react";
import "./styles.css";
import "./panel-left.css";
import Panel from "./Panel.js";

export default function App() {
  return (
    <div className="App">
      <Panel
        UID="id1"
        mainClass="panel-left"
        contentClass="panel-left-content"
        buttonClass="panel-left-button"
      >
        <div>AAA</div>
      </Panel>
    </div>
  );
}
