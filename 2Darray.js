/* 2 dimension array */

const num1= [1, 2, 3];  // one dimension 
const num2 = [[1,2], [2,3], [4,5]]; // two dimennsion

num1[2] // 3 
nnum[0] // [1,2]

num2[num2.length-1] // [5,6]

// loop array

for (let i = 0; i < num1.length; i++){
    let element = num1[i];
    console.log(element)
}


// 2d array loop

for (let i = 0; i < num2.length; i++){
    let currentArray = num2[i];
    for (let j = 0; j <currentArray.length; j++) {
         let currentElement = currentArray[j];
         console.log("Current element: ", currentElement);
    }
   
}