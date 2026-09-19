// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', convertToCentimeters);
let newInches = 0
let cent = 0
function convertToCentimeters() {
    // TODO:
    // 1. Get the feet and inches values from the input fields
    let feet = parseInt(document.getElementById("feet").value)
    let inches = parseInt(document.getElementById("inches").value)
    // 2. Convert to centimeters using:
    //    - First convert feet to inches (1 foot = 12 inches)
    newInches = feet * 12
    //    - Then convert total inches to centimeters (1 inch = 2.54 cm)
    cent = newInches * 2.54
    // 3. Display the result in the centimeters span element
    document.getElementById("centimeters").textContent = +cent
}
