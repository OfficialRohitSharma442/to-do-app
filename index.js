import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
 import App from "./App.jsx";
 import IncrimentDec from "./IncrimentDec";
import Clock from "./Clock";
//import GoogleKeep from "./GoogleKeep";

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <App />
    <IncrimentDec /> 
    {/*<GoogleKeep />*/}
  </React.StrictMode>,
  document.getElementById("root")
);
