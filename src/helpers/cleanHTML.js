import DOMPurify from "dompurify";

export const cleanHTML = (text) => {
  return DOMPurify.sanitize(text, {})
}

export const replaceTags = (text) => {
  return text
    .replace(/(<([^>]+)>)/gi, " ")
    .replace(/<script.*>.*<\/script>/ims, " ")
    .trim()
}

