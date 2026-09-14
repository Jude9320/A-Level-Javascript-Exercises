// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    // 2. Calculate:
    //    - (A + B + C) / 3
    //    - A × B × C
    //    - A + (B × C)
    // 3. Display the results in the respective span elements
}

let num1 = parseInt(document.getElementById("Enter numer 1"))
let num2 = parseInt(document.getElementById("Enter numer 2"))
let num3 = parseInt(document.getElementById("Enter numer 3"))


result1 = (num1 + num2 + num3) / 3
result2 = num1 * num2 * num3
result3 = num1 + (num2 * num3)

document.getElementById("Result one is: " + result1)
document.getElementById("Result two is: " + result2)
document.getElementById("Result three is: " + result3)





