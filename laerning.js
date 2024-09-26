/* 
    Airline ticket example 
    notM ember = full price
    normalMember = 5% discount 
    silverMember = 10% discount
    goldMember = 15% discount
    platinumMember = 20% discount
*/

const originalPrice = 100;
let totalPrice = 0;
let memberType = "silverMember";
 
if (memberType === "normalMember") {
    totalPrice += 100 * 0.95;
} else if (memberType === "silverMember") {
    totalPrice += 100 * 0.9;
} else if (memberType === "goldMember") {
    totalPrice += 100 * 0.85;
} else if (memberType === "platinumMember") {
    totalPrice += 100 * 0.8;
} else {
    totalPrice = originalPrice
}
