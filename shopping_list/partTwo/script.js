const inputTag = document.getElementsByClassName("form-control")[0];
const shoppinglistTag = document.getElementsByClassName("shoppingListContainer")[0];
// <i class="fa-regular fa-trash-can"></i>
let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value ;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () => {
        const classExist = parentDiv.classList.contains("purchased")
        if (classExist){
            parentDiv.classList.remove("purchased");
        } else {
            parentDiv.classList.add("purchased");
        }
    });
    const spanTag = document.createElement("span");
    const trashIon = document.createElement("i");
    trashIon.classList.add("fa-regular", "fa-trash-can");
    trashIon.addEventListener("click", (event) => {
        productContainer.remove();

    })
    spanTag.id = productId;
    const product = productId.toString() + ". " + inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIon);
    shoppinglistTag.append(productContainer);
    inputTag.value = "";
    productId += 1;
};
inputTag.addEventListener("change", handleChange);
