import $ from "jquery";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import styles from "../css/style.css";

const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progress");

let currActive = 1;
next.addEventListener("click", (e) => {
  e.preventDefault();
  currActive++;

  if (currActive > circles.length) {
    currActive = circles.length;
  }
  console.log(currActive);

  update();
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  currActive--;

  if (currActive < 1) {
    currActive = 1;
  }
  console.log(currActive);

  update();
});

const update = function () {
  //add/remove active class
  circles.forEach((circle, idx) => {
    if (idx < currActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  //move progress bar

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currActive === 1) {
    prev.disabled = true;
  } else if (currActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}
