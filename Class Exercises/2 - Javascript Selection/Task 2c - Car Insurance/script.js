// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});
const basePremium = 500
let discount = ""
let premium = 0
let claimsFee = 0
let fee = 0
let baseClaimsFee = 0
// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age = parseInt(document.getElementById("age").value)
    let claims = parseInt(document.getElementById("noClaims").value)
    let previousClaims = parseInt(document.getElementById("previousClaims").value)
    // TODO: Calculate base premium (£500)
    // TODO: Apply age adjustment
    if (age < 25) {
        premium = (basePremium * 0.5) + basePremium
        fee = "+50%"
    }else if (age > 40) {
        premium = basePremium * 0.85
        fee = "-15%"
    } else {
        premium = basePremium
        fee = "+0%"
    }
    // Under 25: +50%
    // 25-40: No change
    // Over 40: -15% 
    // TODO: Apply no claims bonus
    // 0 years: No discount
    if (claims === 0) {
        premium = (premium * 1)
        discount = "0%"
    // 1-2 years: 10% discount
    } else if (claims >= 1 && claims <= 2){
        premium = (premium * 0.9)
        discount = "10%"
    // 3-5 years: 25% discount
    } else if (claims >= 3 && claims <= 5){
        premium = (premium * 0.75)
        discount = "25%"
    // Over 5 years: 35% discount 
    } else {
        premium = (premium * 0.65)
        discount = "35%"
    }
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    baseClaimsFee = (premium * 0.2)
    claimsFee = (baseClaimsFee * previousClaims)
    // TODO: Display the final premium and the breakdown of calculations
    let finalPremium = (claimsFee + premium)
    document.getElementById("breakdownSection").textContent = "Total previous claims fee = " + claimsFee + ". Total price change for age = " + fee + ". Total discount = " + discount
    document.getElementById("result").textContent = finalPremium
}
