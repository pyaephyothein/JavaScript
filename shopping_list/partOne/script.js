const inputTag = document.getElementsByClassName("form-control")[0];
const listTag = document.getElementsByClassName("list")[0];

const handleChange = (event) => {
    const inputValue = event.target.value ;
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.append(inputValue);
    listTag.append(listItem);
    inputTag.value = "";
};
inputTag.addEventListener("change", handleChange);
