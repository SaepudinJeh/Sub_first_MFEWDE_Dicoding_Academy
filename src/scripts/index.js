import "regenerator-runtime";
import "../styles/main.css";

import "./components/navbar";
import "./components/heroImage";
import "./components/card-list";
import data from "../DATA.json";

const headerElement = document.querySelector("header");
const containerElement = document.querySelector(".container");
const menuToggle = document.querySelector('.hamburger input');
const navItem = document.querySelector('nav ul');

const appBar = document.createElement("app-bar");
const slideImage = document.createElement("slider-images");
const cardList = document.createElement("card-list");

cardList.cards = data.restaurants;

headerElement.appendChild(appBar);       
headerElement.appendChild(slideImage);
containerElement.appendChild(cardList);

menuToggle.addEventListener('click', () => {
    navItem.cardList.toggle('slide')
})
