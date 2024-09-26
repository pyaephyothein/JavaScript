// while loop (exit conding is important for the while loop )
 let validNumber = true;
 while(condition) {
    let promptValue = prompt("Please enter a number between 1 and 100");
    const parsedValue = parseInt(promptValue,10)
    if (parsedValue >1 && parsedValue <100) {
        console.log("Entered value: ", parsedValue)
        validNumber = false; // exit condition
    }
}
