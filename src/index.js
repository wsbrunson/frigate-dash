import "./index.css";
import App from "./App";
import Chance from "chance";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <App log={true} chance={new Chance(Math.random())} />,
  document.getElementById("root")
);
