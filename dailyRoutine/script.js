const inputText = document.getElementsByClassName("form-control")[0];
const listContainer = document.getElementsByClassName("shoppingListContainer")[0];

let productId = 1;
const handlechange = (event) => {
    const inputValue = event.target.value;
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("parentsDiv");
    const tagContainer = document.createElement("div");
    const spanTag = document.createElement("span");
    spanTag.id = productId;
    tagContainer.addEventListener("click", () => {
        const classExit = tagContainer.classList.contains("textLine");
        if(classExit){
            tagContainer.classList.remove("textLine");
        } else {
            tagContainer.classList.add("textLine");
        }
    });
   

    const trashCan = document.createElement("i");
    trashCan.classList.add("fa-solid", "fa-trash-can")
    trashCan.addEventListener("click", (event) => {
        parentDiv.remove();
    });
    tagContainer.classList.add("yourList")
    const routineList = productId.toString() + ". " + inputValue;
    parentDiv.append(tagContainer, trashCan);
    tagContainer.append(spanTag);
    spanTag.append(routineList);
    listContainer.append(parentDiv);
    inputText.value = "";
    productId += 1;
}
inputText.addEventListener("change", handlechange);
