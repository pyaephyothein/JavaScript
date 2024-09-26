// wrong
const number = 10;
number++; // will raise error 
console.log("will nnot reach hear")

/// right 
let numbers = 10;
number++; 
console.log("will nnot reach hear")

const users = ["Maria", "Marcus", "Ken", "Hannah"];

const showChatSidebar = () => {
    for (const i = 0; i < users.length; i++) {
        console.log("code to show user here..")
    }
}

const showLeftSidebar = () => {
    console.log("code to show sidebar here..");
}
const showMainFeed = () => {
    console.log("code to show user here..");
}


showLeftSidebar();
showMainFeed();

// try...catch

try {
    showChatSidebar();
    

} catch (error) {
  console.log("cath error is here ", error);  

}