// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePay);
let basicPay = 0
let overtimePay = 0
let total = 0
function calculatePay() {
    // TODO:
    // 1. Get all input values:
    //    - Standard hourly rate
    let standard = parseInt(document.getElementById("standardRate").value)
    //    - Overtime rate
    let overtime = parseInt(document.getElementById("overtimeRate").value)
    //    - Basic hours worked
    let hours = parseInt(document.getElementById("basicHours").value)
    //    - Overtime hours worked
    let overtimeHours = parseInt(document.getElementById("overtimeHours").value)
    // 2. Calculate:
    //    - Basic pay (standard rate × basic hours)
    basicPay = (standard * hours)
    //    - Overtime pay (overtime rate × overtime hours)
    overtimePay = (overtime * overtimeHours)
    //    - Total pay (basic pay + overtime pay)
    total = (basicPay + overtimePay)
    // 3. Display all amounts formatted to 2 decimal places
    document.getElementById("basicPay").textContent = +basicPay.toFixed(2)
    document.getElementById("overtimePay").textContent = +overtimePay.toFixed(2)
    document.getElementById("totalPay").textContent = +total.toFixed(2)
}
