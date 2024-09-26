/* continue, brake*/

switch (num1) {
    case 1:
        num2 += 1;
        break;
    case 2:
        num2 +=2;
        break
    default:
        num2 += 3;
}

const customers = [
    {name: "customer1", email: "customer1@gmail.com", gender: "female"},
    {name: "customer2", email: "customer2@gmail.com", gender: "male"},
    {name: "customer3", email: "customer3@gmail.com", gender: "female"},
    {name: "customer4", email: "customer4@gmail.com", gender: "male"},
    {name: "customer5", email: "customer4@gmail.com", gender: "female"},
    {name: "customer6", email: "customer6@gmail.com", gender: "male"},

]

for (let i = 0; i < customers.length; i++) {
    let currentCustomer = customers[i];
    if (currentCustomer.gender === "male"){
        continue;
    }
    console.log ("sending email to: ",currentCustomer.email);
} 

for (let i = 0; i < customers.length; i++) {
    let currentCustomer = customers[i];
    console.log ("sending email to: ",currentCustomer.email);
    if (i ===2) {
        break;
     }   
} 

let i = 0;
while (i < customers.length) {
    let currentCustomer = customers[i];
    i++;
    if (currentCustomer.gender === "male") {
        
        continue;
    }
    console.log("Sending email to: ", currentCustomer.email);
   
}

while (i < customers.length) {
    let currentCustomer = customers[i];
    i++;
    console.log("Sending email to: ", currentCustomer.email);
    if (i === 3) {
        
        break;
    }
}
