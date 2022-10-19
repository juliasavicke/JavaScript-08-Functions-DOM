"use strict";
console.log("deleteList.js");

const listEl = document.querySelectorAll(".deleteMe");
console.log("listEl ===", listEl);

document.body.addEventListener("click", (event) => {
  console.log("paspaudei");
  console.log("event ===", event);
  console.log("listEl ===", listEl);
  event.target.style.backgroundColor = "aqua";

  if (event.target.className === "deleteMe") {
    event.target.remove();
  }
});
