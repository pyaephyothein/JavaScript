const customers = [
    [
        { name: "customer1", email: "customer1@gmail.com", gender: "Male"},
        { name: "customer2", email: "customer2@gmail.com", gender: "Female"},
        { name: "customer3", email: "customer3@gmail.com", gender: "Female"},
        { name: "customer4", email: "customer4@gmail.com", gender: "Male"},
    ],
    [
        { name: "customer5", email: "customer5@gmail.com", gender: "Male"},
        { name: "customer6", email: "customer6@gmail.com", gender: "Female"},
        { name: "customer7", email: "customer7@gmail.com", gender: "Female"},
        { name: "customer8", email: "customer8@gmail.com", gender: "Male"},
    ],
    [
        { name: "customer9", email: "customer9@gmail.com", gender: "Male"},
        { name: "customer10", email: "customer10@gmail.com", gender: "Female"},
        { name: "customer11", email: "customer11@gmail.com", gender: "Female"},
        { name: "customer12", email: "customer12@gmail.com", gender: "Male"},
    ],
]

for (let i = 0; i < customers.length; i++){
    for (let j = 0; j < customers[i].length; j++) {
        console.log("The customer email is :", customers[i][j].email)
     }
}

    
        


    