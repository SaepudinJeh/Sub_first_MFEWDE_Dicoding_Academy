import "regenerator-runtime";
import "../styles/main.css";

import "./components/navbar";

const containerElement = document.querySelector("#container");

const appBar = document.createElement("app-bar");

containerElement.appendChild(appBar);