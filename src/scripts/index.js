import "regenerator-runtime";
import "../styles/main.css";

import "./components/navbar";
import "./components/slider";

const containerElement = document.querySelector("#container");

const appBar = document.createElement("app-bar");
const slideImage = document.createElement("slider-images");

containerElement.appendChild(appBar);
containerElement.appendChild(slideImage);