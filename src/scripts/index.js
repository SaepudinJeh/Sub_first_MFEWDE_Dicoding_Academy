import "regenerator-runtime";
import "../styles/main.css";

import "./components/navbar";
import "./components/slider";
import "./components/card-item";

const containerElement = document.querySelector("#container");

const appBar = document.createElement("app-bar");
const slideImage = document.createElement("slider-images");
const card = document.createElement("card-item")

containerElement.appendChild(appBar);
containerElement.appendChild(slideImage);
containerElement.appendChild(card);