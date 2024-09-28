const myButtom = document.getElementById("myButtom");
const image = document.getElementsByClassName("photos")[0];
const originalImageSource = image.scr
const imageArray = [
    "https://plus.unsplash.com/premium_photo-1699566447802-0551b84a186d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726309356095-e4c9be366c13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726697187202-c1c33efd40d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726758267577-f8ca9449ed6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"
];

let counnter = 0;
const myfunction = () => {
    if (counnter === 5) {
        image.src = originalImageSource;
        counnter === 0;
        return;
    }
    const imageLink = imageArray[counnter];
    image.src = imageLink;
    counnter+= 1;
    consol.log("counter value is", counnter);
};

myButtom.addEventListener("click", myfunction); // it's very useful style in js


/* 
1. image in array 
2. counter in function
3. get images in array using counter
*/


