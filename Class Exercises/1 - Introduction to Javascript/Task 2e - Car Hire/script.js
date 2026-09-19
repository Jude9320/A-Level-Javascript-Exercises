// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHireCharge);
let charge = 0
let total = 0
function calculateHireCharge() {
    // TODO:
    // 1. Get the miles travelled from the input field
    let miles = parseInt(document.getElementById("miles").value)
    // 2. Calculate:
    //    - Mileage charge (5p per mile = £0.05 per mile)
    charge = miles * 0.05
    //    - Total charge (£25.00 + mileage charge)
    total = charge + 25
    // 3. Display both charges formatted to 2 decimal places
    document.getElementById("mileageCharge").textContent = + charge.toFixed(2)
    document.getElementById("totalCharge").textContent = + total.toFixed(2)
}
