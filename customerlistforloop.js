let customers = [
    {name: "customer1", phoneNumber: "123456", email: "abcdefcs1@gmail.com", dateofBirth: "01.01.2002"},
    {name: "customer2", phoneNumber: "13579", email: "abcdefcs2@gmail.com", dateofBirth: "02.02.2002"},
    {name: "customer3", phoneNumber: "246810", email: "abcdefcs3@gmail.com", dateofBirth: "03.03.2002"},
    {name: "customer4", phoneNumber: "214365", email: "abcdefcs4@gmail.com", dateofBirth: "04.04.200"}
];

for (let i = 0; i < customers.length; i++) {
    let customerEmail = customers[i].email;
    sendEmail(customerEmail)
}

const sendEmail = (email) => {
    console.log("sending email to:", email )
}

const sendPhoneNumer = (phoneNumber) => {
    console.log("sending phone number to:", phoneNumber)

}

for (let i = 0; i < customers.length; i++) {
    let customerPhoneNumber = customers[i].phoneNumber;
    sendPhoneNumer(customerPhoneNumber)
}

const sendDateOfBirth = (dateofBirth) => {
    console.log("sending date of birth to", dateofBirth)

}

for(i=0;i<customers.length;i++) {
    let customerdateOfBirth = customers[i].dateofBirth;
    sendDateOfBirth(customerdateOfBirth)
}

customers.push (
    {name: "customer5", phoneNumber: "123456", email: "abcdefcs5@gmail.com", dateofBirth: "05.05.2002"},
    {name: "customer6", phoneNumber: "13579", email: "abcdefcs6@gmail.com", dateofBirth: "06.06.2002"},
    {name: "customer7", phoneNumber: "246810", email: "abcdefcs7@gmail.com", dateofBirth: "07.07.2002"},
    {name: "customer8", phoneNumber: "214365", email: "abcdefcs8@gmail.com", dateofBirth: "08.08.200"},
)

