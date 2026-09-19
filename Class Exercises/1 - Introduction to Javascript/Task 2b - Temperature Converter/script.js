// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', convertTemperature);
let fah = 0
function convertTemperature() {
    // TODO:
    // 1. Get the Celsius temperature from the input field
    let cel = parseInt(document.getElementById("celsius").value)
    // 2. Convert to Fahrenheit using the formula: F = 1.8 * C + 32
    fah = 1.8 * (cel + 32)
    // 3. Display the result in the fahrenheit span element
    document.getElementById("fahrenheit").textContent = + fah
}
