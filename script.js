"use strict";

const btnConvert = document.querySelector(".convert");

const clickAnimation = function (button) {
  button.style.backgroundColor = "#f8f8f8";
  button.style.transform = "translate(0.1rem, 0.1rem)";
  setTimeout(function () {
    button.style.transform = "translate(0, 0)";
    button.style.backgroundColor = "#fff";
  }, 100);
};

const convert = function () {
  clickAnimation(btnConvert);
};

btnConvert.addEventListener("click", convert);
