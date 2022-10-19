"use strict";
console.log("domPr.js");

const h1El = document.querySelector(".mainHeading");
console.log("h1El ===", h1El);
//h1El.textContent = "Dynamic Heading";
h1El.textContent = "Dynamic Heading";
h1El.style.fontSize = `57px`;

const artTextEl = document.querySelector("#art__text");
console.log("artTextEl ===", artTextEl);

const listEl = document.querySelectorAll("#colors li");
console.log("listEl ===", listEl);

const artDateEl = document.querySelector(`#art__date`);
console.log("artDateEl ===", artDateEl);
artDateEl.textContent = new Date().toLocaleDateString();

const lastColor = document.querySelector("#colors li:last-child");
console.log("lastColor ===", lastColor);
lastColor.style.backgroundColor = "tomato";

const sarasas = document.querySelector("#colors");
console.log("sarasas ===", sarasas);
console.log(
  "sarasas.previousElementSibling ===",
  sarasas.previousElementSibling
);
sarasas.lastElementChild.style.color = "white";
