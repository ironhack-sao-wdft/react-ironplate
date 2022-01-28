import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/styles/index.css"
import App from "./components/App";
import './assets/styles/index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
