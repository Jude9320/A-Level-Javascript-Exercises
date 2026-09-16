// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);
let average = 0
let product = 0
let expression = 0
function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    let A = parseInt(document.getElementById("numberA").value)
    let B = parseInt(document.getElementById("numberB").value)
    let C = parseInt(document.getElementById("numberC").value)
    // 2. Calculate:
    //    - (A + B + C) / 3
    average = (A + B + C) / 3
    //    - A × B × C
    product = A * B * C
    //    - A + (B × C)
    expression = A + (B * C)
    // 3. Display the results in the respective span elements
    document.getElementById("average").textContent = average
    document.getElementById("product").textContent = product
    document.getElementById("expression").textContent = expression



}