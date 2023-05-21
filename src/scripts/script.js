import { encryptText } from "./criptografar.js";
import { decrypt } from "./descriptografar.js";

const text = document.querySelector("#cript_text");
const criptButton = document.querySelector("#criptBtn");
const desencriptButton = document.querySelector("#desencriptBtn");

criptButton.addEventListener("click", () => {
  console.log(encryptText(text.value));
});

desencriptButton.addEventListener("click", () => {
  console.log(decrypt(text.value));
})