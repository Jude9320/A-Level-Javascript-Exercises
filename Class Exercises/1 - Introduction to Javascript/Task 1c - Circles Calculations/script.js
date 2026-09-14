// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    //    - Area using the formula: π * radius^2
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π
}

let radius = parseInt(document.getelementbyID("Enter the radius"))

circum = (2 * Math.PI * radius)
area = (Math.PI * (radius ** 2))

console.log("The circumference is " + circum)
console.log("The area is " + area)

