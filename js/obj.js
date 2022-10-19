"use strict";
console.log("dom.js");

let bigObj = {
  title: "Mr",
  sayHi: function () {
    console.log(`Hello, I am a method in bigObj ${bigObj.title}`);
  },
  address: {
    street: "Maple",
    no: 6,
    coords: {
      x: 323,
      y: 123,
    },
  },
};

bigObj.sayHi();

bigObj.address.coords.x;

console.log(
  `${bigObj.title} lives in ${bigObj.address.street} street, number ${bigObj.address.no}`
);
