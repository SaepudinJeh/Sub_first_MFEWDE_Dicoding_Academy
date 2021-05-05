import "regenerator-runtime";
import "../styles/main.css";

import "./components/navbar";
import "./components/slider";
import "./components/card-list";
import data from "../DATA.json";

const containerElement = document.querySelector("#container");

const appBar = document.createElement("app-bar");
const slideImage = document.createElement("slider-images");
const cardList = document.createElement("card-list");

cardList.cards = data.restaurants;

containerElement.appendChild(appBar);
containerElement.appendChild(slideImage);
containerElement.appendChild(cardList);