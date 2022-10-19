"use strict";
console.log("events.js");

function makeBodyDark() {
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "white";
}
function toggleBodyDark() {
  if (document.body.style.backgroundColor === "rgb(51, 51, 51)") {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#333";
  } else {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
  }
  console.log(
    "document.body.style.backgroundColor ===",
    document.body.style.backgroundColor
  );
}

const buttonEl = document.querySelector("#btn1");
const button2El = document.querySelector("#btn2");
console.log("buttonEl ===", buttonEl);
buttonEl.addEventListener("click", makeBodyDark);
button2El.addEventListener("click", toggleBodyDark);
buttonEl.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "aqua";
});
