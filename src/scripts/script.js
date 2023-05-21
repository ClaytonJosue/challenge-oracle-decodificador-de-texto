import { encryptText } from "./criptografar.js";
import { decrypt } from "./descriptografar.js";

const text = document.querySelector("#cript_text");
const criptButton = document.querySelector("#criptBtn");
const desencriptButton = document.querySelector("#desencriptBtn");

const rightText = document.querySelector("#typedText");
const rightContent = document.querySelector("#rightContent");
const rightSection = document.querySelector("#rightSection");

criptButton.addEventListener("click", () => {
  if(text.value != "") {
    rightContent.classList.add("disabled")
    rightText.innerHTML = encryptText(text.value);
    rightSection.classList.add("withOverflow");
  } else {
    rightContent.classList.remove("disabled")
    rightSection.classList.remove("withOverflow");
    rightText.innerHTML = "";
  }
});

desencriptButton.addEventListener("click", () => {
  console.log(decrypt(text.value));
})