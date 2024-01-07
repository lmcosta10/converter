"use strict";

// Document elements
const btnConvert = document.querySelector(".convert");
const convertedBox = document.querySelector(".converted");

let firstConversion = true;

const clickAnimation = function (button) {
  button.style.backgroundColor = "#f8f8f8";
  button.style.transform = "translate(0.1rem, 0.1rem)";
  setTimeout(function () {
    button.style.transform = "translate(0, 0)";
    button.style.backgroundColor = "#fff";
  }, 100);
};

// TODO: think if there is a better logic
// Conversion functions

const hexToDec = function (text) {
  const numbersStr = text.trim().toLowerCase().split(" ");

  const possibleLetters = ["a", "b", "c", "d", "e", "f"];

  const convertedText = [];

  for (const numberStr of numbersStr) {
    let value = 0;
    for (let i = 1; i <= numberStr.length; i++) {
      const number = numberStr.at(-i);
      if (isFinite(Number(number))) value += Number(number) * 16 ** (i - 1);
      else if (possibleLetters.includes(number)) {
        if (number === "a") value += 10 * 16 ** (i - 1);
        else if (number === "b") value += 11 * 16 ** (i - 1);
        else if (number === "c") value += 12 * 16 ** (i - 1);
        else if (number === "d") value += 13 * 16 ** (i - 1);
        else if (number === "e") value += 14 * 16 ** (i - 1);
        else if (number === "f") value += 15 * 16 ** (i - 1);
      } else {
        console.log("That's not a valid hexadecimal number.");
      }
    }
    if (numberStr !== "") convertedText.push(String(value));
  }

  ////////////////////////////////////////////////////////////////////
  // Another way, using parseInt:
  //   const numbersStr = text.trim().toLowerCase().split(" ");
  //   const dec = numbersStr
  //     .map((numberStr) => Number.parseInt(numberStr, 16))
  //     .join(" ");
  //   return dec;

  return convertedText.join(" ");
};

const binToDec = function (text) {
  const numbersStr = text.trim().toLowerCase().split(" ");

  const convertedText = [];

  for (const numberStr of numbersStr) {
    let value = 0;
    for (let i = 1; i <= numberStr.length; i++) {
      const number = numberStr.at(-i);
      if (isFinite(Number(number))) value += Number(number) * 2 ** (i - 1);
      else {
        console.log("That's not a valid binary number.");
      }
    }
    if (numberStr !== "") convertedText.push(String(value));
  }

  return convertedText.join(" ");
};

// UI functions

const showConvertedBox = function () {
  convertedBox.classList.remove("hidden");
};

const convert = function () {
  clickAnimation(btnConvert);
  if (firstConversion) {
    showConvertedBox();
    firstConversion = false;
  }

  const fromSystem = document.querySelector(
    'input[name="system-from"]:checked'
  ).value;
  const toSystem = document.querySelector(
    'input[name="system-to"]:checked'
  ).value;
  const text = document.querySelector("textarea").value;

  let textDecimal, textConverted;

  if (fromSystem === "hexadecimal") {
    textDecimal = hexToDec(text);
  } else if (fromSystem === "binary") {
    textDecimal = binToDec(text);
  } else textDecimal = text;

  if (toSystem === "hexadecimal") {
    // TODO: textConverted = decToHex(textDecimal);
  } else if (toSystem === "binary") {
    // TODO: textConverted = decToBin(textDecimal);
  } else textConverted = textDecimal;

  convertedBox.textContent = textConverted;
};

// Event Listeners

btnConvert.addEventListener("click", convert);
