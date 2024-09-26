/* Array data structure*/
{} // empty object, unordered collection
[] // empty array, ordered collection

// what is index stary from 0 just like python data type 

const unordered = {z: "hello", 1: "world", a: "test"}
const ordered = ["Yangon", "Mandalay", "Myitkyina"]

// Accessing arrary element 

ordered[0] // this is Yangon 
ordered[1] // this is Mandalay
ordered[2] // this is Myitkyina

// array.length property

ordered.length

// push method
ordered.push("Taungyi")

// get list item from an array 
const index = ordered.length - 1;
index 

// array methods 
ordered.push() // add the last in list 
ordered.unshift() // add the frist in list
ordered.pop() // delete the last in list 
ordered.shift() // delete the first in list 
ordered.splice(2,1) // delete start the every positon and how many delete in list 
ordered.indexOf ("Taungyi") // find the index all in list 
// if show the -1 it's index are not in list and carefully write the index definitely

// can add the object//
const carInfo = {
    brand: "Toyota",
    price: 30000000,
    purchasedYear: 2019,
    model: 2016,
}

ordered.push(carInfo) 


