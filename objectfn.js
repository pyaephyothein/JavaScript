// object 

const num1 = 10;
const cityNmae = "Yangon"
const isLoggIn = true;

/*
name = "Pyae Phyo Thein"
age = 50 
height = 180
city = "Yangon"
*/

{} // empty object 
const person1 ={
    name: "Pyae Phyo Thein", // key vaule pair
    age: 50,
    height: 180,
    city: "Yangon"
    isActor: true
    walk: () => {
        alert("Pyae Phot Thein is walking now")
    }
} 

// Accessing object's properties and methods
// 1) dot notation

person1.age
person1.city
person1.dateOfBirth
person1.walk()
person1.hobby("sleeping")


// 2) bracket notation
person1["name"]
person1["age"]
person1["dateOfBirth"]

/* 
chrome network request ==> server 
server ==> return object 
*/

const inputValue = ""
const inputValue2 = ""
const propertyName = "donatedBy " + inputValue;

person1[propertyNmae] = inputValue2 ;
