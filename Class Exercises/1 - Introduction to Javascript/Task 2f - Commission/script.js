// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);
let total = 0
let commission = 0
function calculateCommission() {
    // TODO:
    // 1. Get all invoice numbers and amounts from the input fields
    let invoice1 = parseInt(document.getElementById("invoice1").value)
    let amount1 = parseInt(document.getElementById("amount1").value)
    let invoice2 = parseInt(document.getElementById("invoice2").value)
    let amount2 = parseInt(document.getElementById("amount2").value)
    let invoice3 = parseInt(document.getElementById("invoice3").value)
    let amount3 = parseInt(document.getElementById("amount3").value)
    // 2. Calculate:
    //    - Total sales amount
    total = amount1 + amount2 + amount3
    //    - Commission (20% of total sales)
    commission = total * 0.2
    // 3. Display:
    //    - Each sale's details
    document.getElementById("salesDetails").textContent = +invoice1 + invoice2 + invoice3
    //    - Total sales amount
    document.getElementById("totalSales").textContent = + total.toFixed(2)
    //    - Commission earned
    document.getElementById("commission").textContent = commission.toFixed(2)
    // Note: Format all monetary values to 2 decimal places
}
