const bodyElement = document.getElementsByTagName("body")[0];
console.log("Body Element : ", bodyElement);

const  parentDiv = document.getElementsByClassName("parents")[0];
parentDiv.innerHTML = "";

const divWithId = document.getElementsByClassName("myId");
console.log("My ID :", divWithId);


/*
const parentDiv = document.createElement("div");
parentDiv.classlist.add("parent")

const childDivone = document.createElements("div");
childDivOne.append("Childone")
childDivOne.classlist.add("child")
childDivone.appendChild(childDivOneText);

const childDivtwo = document.createElements("div");
childDivOne.append("Childone")
childDivOne.classlist.add("child")
childDivone.appendChild(childDivTwoText);

parentDiv.append(ChildDivone, childDivTwo);

bodyElements.appendChild(parentDiv);

*/

const styleParentsDiv = document.getElementsByClassName("parents")[0];
console.log("StyleParentsDiv widht is :", getComputedStyle(styleParentsDiv).width);
console.log("StyleParentsDiv widht is :", getComputedStyle(styleParentsDiv).height);
console.log(
    "styleParentsDiv bacground color is : ", getComputedStyle(styleParentsDiv).backgroundColor)
