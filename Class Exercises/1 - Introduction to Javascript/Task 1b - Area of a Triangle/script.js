// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateArea);
let area = 0
function calculateArea() {
    // TODO:
    // 1. Get the base and height values from the input fields
    let base = parseInt(document.getElementById("base").value)
    let height = parseInt(document.getElementById("height").value)
    // 2. Calculate the area using the formula: area = (base * height) / 2
    area = (((base) * (height)) / (2))
    // 3. Display the result in the area span element
    document.getElementById("area").textContent = + area 
}