// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);
let area = 0
let circum = 0
let radius = 0
function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    radius = parseInt(document.getElementById("radius").value)
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    circum = ((2) * (Math.PI) * (radius))
    //    - Area using the formula: π * radius^2
    area = ((Math.PI) * (radius ** 2))
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π
    document.getElementById("circumference").textContent = + circum
    document.getElementById("area").textContent = + area
}