"use strict";
console.log("dom.js");

const nuorodaIApp = document.getElementById("app");
console.log("nuorodaIApp ===", nuorodaIApp);

nuorodaIApp.style.backgroundColor = "tomato";

console.log("nuorodaIApp.children ===", nuorodaIApp.children);

const allLiEl = document.querySelectorAll(".listEl");
console.log("allLiEl ===", allLiEl);
console.log("allLiEl ===", typeof allLiEl);

const allLiEl1 = document.getElementsByClassName("listEl");
console.log("allLiEl1 ===", allLiEl1);
console.log("allLiEl1 ===", typeof allLiEl1);

for (let item of allLiEl) {
  item.style.backgroundColor = "blue";
  console.log("item ===", item);
}

for (let i = 0; i <= allLiEl.length; i++) {
  if (i === 1) {
    allLiEl[i].style.backgroundColor = "green";
  }
}
const vidEl = document.querySelector(".listEl:nth-child(2)");
console.log("vidEl ===", vidEl);
vidEl.style.backgroundColor = "yellow";

const ulEl = document.querySelector(".list");
console.log("ulEl ===", ulEl);
ulEl.style.listStyleType = "none";
ulEl.style.paddingLeft = 0;
