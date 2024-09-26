// for in loop

const customers = {name: "customer1", phoneNumber: "123456789", email: "customer1@gmail.com"}; 
for (let propertyName in customers) {
    console.log(propertyName)
}

// dot.notation 
customers.phoneNumber // out put phone number

// bracket notation 
customer["phoneNumber"] // 

for (let prop in customers) {
    console.log(customers[prop]);
} // out put property value

for (let prop in customers) {
    console.log(propertyName ,customers[prop],)
} // output both of property name and value 



