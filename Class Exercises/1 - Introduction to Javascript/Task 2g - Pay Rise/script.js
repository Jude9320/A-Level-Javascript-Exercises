// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePayRise);
let newSalary = 0
let backPay = 0
function calculatePayRise() {
    // TODO:
    // 1. Get the current salary, months back dated, and pay rise percentage
    let salary = parseInt(document.getElementById("currentSalary").value)
    let months = parseInt(document.getElementById("months").value)
    let percentage = parseInt(document.getElementById("percentage").value)
    // 2. Calculate:
    //    - New annual salary (current salary + percentage increase)
    newSalary = (salary + percentage)
    //    - Back pay (difference in monthly salary × number of months)
    backPay = ((newSalary - salary) / 12) * months
    // 3. Display both results formatted to 2 decimal places
    document.getElementById("newSalary").textContent = + newSalary.toFixed(2)
    document.getElementById("backPay").textContent = + backPay.toFixed(2)
}