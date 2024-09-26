// local scope 
// code here cab NOT use carName

function myFunction() {
    var carName = "Volvo" ;
    num = 10;
}

 // Global scope
// code here CAN use carName

console.log(carName); // Will raise error coz of local scope
console.log(10); // Will not raise error coz of global scope
 

// block scope (similar the local scope)

{
    let num1 = 10;
}

console.log(num1) // will raise error code because block scoop is not run in golbal scope 

// var and varwithout are global scope but we can use the var in local scope but var is always show  the global scope 


const test = () => {
    var num1 = 10;

    if (num1 === 10) {
        var numWithVar =1;
        let numWithlet = 2;
        const numWithConst = 3;
    }

    console.log(numWithVar);
    console.log(numWithLet);
    console.log(numWithConst);
}

test();