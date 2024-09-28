const inputTag = document.getElementsByClassName("form-control")[0];
const listTag = document.getElementsByClassName("orderList")[0];
const changeHandle = (event) => {
    const inputValue = event.target.value;
    const listITem = document.createElement("li");
    listITem.classList.add("list-group-item");
    listITem.append(inputValue);
    listTag.append(listITem);
    inputTag.value = "";
};

// Use 'input' event instead of 'change' for real-time feedback
inputTag.addEventListener("change", changeHandle);

