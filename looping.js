/* loop */

const customers = [
    {name: "customer1", phoneNumber: "123456", email: "abcdefcs1@gmail.com", dateofBirth: "01.01.2002"},
    {name: "customer2", phoneNumber: "13579", email: "abcdefcs2@gmail.com", dateofBirth: "02.02.2002"},
    {name: "customer3", phoneNumber: "246810", email: "abcdefcs3@gmail.com", dateofBirth: "03.03.2002"},
    {name: "customer4", phoneNumber: "214365", email: "abcdefcs4@gmail.com", dateofBirth: "04.04.200"}
];

// get customer email 
const coustomer1 = customers[0];
const customer1Email = customer1.email; 
const customer2Email = customers[1].email;
const customer3Email = customers[2].email;
const customer4Email = customers[3].email;

sendEmail(customer1Email);
sendEmail(customer2Email);
sendEmail(customer3Email);
sendEmail(customer4Email);

const sendEmail = (email) => {
    // create email
    // send email
}

// For loop 
// statement 1 = vairable announce > i = 0 assing (0)
// statement 2 = condition boolean value code 
// statement 3 = increase or decrease operator (++)/ (--)

// 1st for loop run the statement1 
/*check the condition and check if it is Ture run body code 
and after run the statement3 if the condition False 
run out of the FOR loop */

 
for (let i = 0; i <3; i++) {
    console.log("hello")
    
}

// iteration1 i = 0 // will run forloop body
// iteration2 i = 1 // will run forloop body
// iteration3 i = 2 // will run forloop body
// itetation4 i = 3 // will not run forloop body

/* console.log can add the parameter (,)
eg . console.log("hello" , i) */


const cities = ["Yangon", "Mandalay", "Myitkyina", "Beijing", "Shanghai"];
for (let i =0; i < cities.length; i++) {
    console.log(cities[i])
}
