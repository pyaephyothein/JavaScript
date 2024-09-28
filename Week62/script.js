const h1Element = document.createElement("h1");
const textNote = document.createTextNode("Welcome to Myanmar");
devElement.appendChild(textNote)
const tagCollection = document.getElementsByTagName("body");
const bodyElement = tagCollection[0];
bodyElement.appendChild(devElement);

// Read

const readH1Element = document.getElementsByTagName("h1")[0];
console.log("Text inside h1 element is : ", readH1Element.textContent);

// u = update
readH1Element.textContent = "Welcome To Yangon";
console.log(" Text inside h1 element is :" . readH1Element.textContent);

// d = delete

readH1Element.remove();
