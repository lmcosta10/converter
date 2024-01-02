"use strict";

const btnConvert = document.querySelector(".convert");

const clickConvertAnimation = function () {
  btnConvert.style.backgroundColor = "#f8f8f8";
  btnConvert.style.transform = "translate(0.1rem, 0.1rem)";
  setTimeout(function () {
    btnConvert.style.transform = "translate(0, 0)";
    btnConvert.style.backgroundColor = "#fff";
  }, 100);
};

const convert = function () {
  clickConvertAnimation();
};

btnConvert.addEventListener("click", convert);
