import {encryptText} from "./criptografar.js";

const text = document.querySelector("#cript_text");
const criptButton = document.querySelector("#criptBtn");

criptButton.addEventListener("click", () => {
  console.log(encryptText(text.value));
})