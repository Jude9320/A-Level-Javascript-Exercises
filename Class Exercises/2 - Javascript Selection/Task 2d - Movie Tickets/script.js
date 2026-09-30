// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateTotal);
});
let childPrice = 0
let adultPrice = 0
let seniorPrice= 0
let childDayFee = 0
let adultDayFee = 0
let seniorDayFee = 0
let childTimeFee = 0
let adultTimeFee = 0
let seniorTimeFee = 0
let totalDayFee = 0
let childDiscount = 0
let adultDiscount = 0
let seniorDiscount = 0
let totalDiscount = 0
let totalTimeDiscount
let discount = ""
let type = ""
let i = 0
let b = 0
// Function to calculate the total ticket cost
function calculateTotal() {
    // TODO: Get values from all input fields
    let adult = parseInt(document.getElementById("adultTickets").value)
    let child = parseInt(document.getElementById("childTickets").value)
    let senior = parseInt(document.getElementById("seniorTickets").value)
    let day = document.getElementById("dayOfWeek").value
    let time = parseInt(document.getElementById("showingTime").value)
        // TODO: Calculate base costs
    // Adult: £12.00
    adultPrice = (adult * 12)
    // Child: £8.00
    childPrice = (child * 8)
    // Senior: £7.50
    seniorPrice = (senior * 7.5)
    let totalBase = (adultPrice + childPrice + seniorPrice)
    let tickets = child + adult + senior

    // TODO: Apply day of week adjustments
    // Friday-Sunday: +£2.50 per ticket
    if (day === "Friday" || "Saturday" || "Sunday") {
        childDayFee = (child * 2.5)
        childPrice = childPrice + childDayFee
        adultDayFee = (adult * 2.5)
        adultPrice = adultPrice + adultDayFee
        seniorDayFee = (senior * 2.5)
        seniorPrice = seniorPrice + seniorDayFee
        totalDayFee = adultDayFee + childDayFee + seniorDayFee
    }
    // TODO: Apply time adjustments
    // Before 5 PM: -£1.50 per ticket
    if (time < 5){
        childTimeDiscount = (child * 1.50)
        childPrice = childPrice - childDiscount
        adultTimeDiscount = (adult * 1.50)
        adultPrice = childPrice - adultDiscount
        seniorTimeDiscount = (senior * 1.50)
        seniorPrice = childPrice - seniorDiscount
        totalTimeDiscount = childDiscount + adultDiscount + seniorDiscount
    }
    // TODO: Calculate subtotal
    let totalPrice = childPrice + adultPrice + seniorPrice
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    if (adult === 2 && child === 2 && senior === 0){
        totalPrice = (total*0.9)
        discount = "10% off"
        type = "Family Booking Discount"
        i = 1
    }
    // Group booking (6 or more tickets): 15% off
    if (tickets >= 6) {
        totalPrice = (totalPrice * 0.85)
        discount = "15% off"
        type = "Group Booking Discount"
        b = 1
    }
    // TODO: Display price breakdown, subtotal, any discounts, and final total
    document.getElementById("fees").textContent = "Friday-Sunday day fees: £" + totalDayFee + " Time Discounts: £" + totalTimeDiscount
    document.getElementById("discount").textContent = " x " + i + type + " x " + b + type + " Total discount applied: " + discount
    document.getElementById("finalTotal").textContent = "Total after discounts and fees applied: " + totalPrice
    document.getElementById("priceBreakdown").textContent = "x" + adult  + " adult tickets" + ": £" + adultPrice + "    x" + child + " child tickets" + ": £" + childPrice + "    x" + senior + " senior tickets" + ": £" + seniorPrice
    document.getElementById("baseSubTotal").textContent = "Total tickets: " + tickets + " tickets sub-total: " + totalBase
}
