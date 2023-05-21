// Encrypt function

export function encryptText(text) {
  return text
          .replace(/e/g, "enter")
          .replace(/i/g, "imes")
          .replace(/a/g, "ai")
          .replace(/o/g, "ober")
          .replace(/u/g, "ufat")
}