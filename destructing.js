const customer = {name : "customer1", email : "coustomer1@gmail.com", gender : "Femake" };

const email = customer.email;
const gender = customer.gender;

// ES6 destructuring 

let { name, email, gender } = customer ;
console.log(name,email,gender,);

/* Array destructuring */

const cities = [ "Yangon" , "Mandalay", "Myitkyinar"];

const [cityOne , cityTwo, CityThree] = cities;
console.log(cityOne,cityTwo,CityThree);


/* Spread Operator*/

const customer = {name : "customer1", email : "coustomer1@gmail.com", gender : "Femake" };
const copyCustomer = {...customer};

const cities = [ "Yangon" , "Mandalay", "Myitkyinar"];

