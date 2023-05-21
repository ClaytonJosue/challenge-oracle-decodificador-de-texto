import { encryptText } from "./criptografar.js";
import { decrypt } from "./descriptografar.js";

const text = document.querySelector("#cript_text");
const criptButton = document.querySelector("#criptBtn");
const desencriptButton = document.querySelector("#desencriptBtn");

const rightText = document.querySelector("#typedText");
const rightContent = document.querySelector("#rightContent");
const rightSection = document.querySelector("#rightSection");
const textContent = document.querySelector("#textContent")

const copyButton = document.querySelector("#copyBtn");

criptButton.addEventListener("click", () => {
  if(text.value != "") {
    textContent.classList.remove("disabled");
    rightContent.classList.add("disabled");
    rightText.innerHTML = encryptText(text.value);
    rightSection.classList.add("withOverflow");
  } else {
    rightContent.classList.remove("disabled");
    textContent.classList.add("disabled");
    rightSection.classList.remove("withOverflow");
    rightText.innerHTML = "";
  }
});

desencriptButton.addEventListener("click", () => {
  if(text.value != "") {
    rightContent.classList.add("disabled")
    rightText.innerHTML = decrypt(text.value);
    rightSection.classList.add("withOverflow");
  } else {
    rightContent.classList.remove("disabled")
    rightSection.classList.remove("withOverflow");
    rightText.innerHTML = "";
  }
});

copyButton.addEventListener("click", async () => {
  let textCopied = rightText.innerHTML
  return await navigator.clipboard.writeText(textCopied)
})