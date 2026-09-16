// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    let A = parseInt(document.getElementById("numberA"))
    let B = parseInt(document.getElementById("numberB"))
    let C = parseInt(document.getElementById("numberC"))
    // 2. Calculate:
    //    - (A + B + C) / 3
    let average = (A + B + C) / 3
    //    - A × B × C
    let product = A * B * C
    //    - A + (B × C)
    let expression = A + (B * C)
    // 3. Display the results in the respective span elements
    console.log(average)
    console.log(product)
    console.log(expression)
}