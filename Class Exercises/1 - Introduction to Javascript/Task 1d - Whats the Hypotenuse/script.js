// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    // TODO:
    // 1. Get the lengths of sides A and B from the input fields
    let A = parseInt(document.getElementById("sideA").value)
    let B = parseInt(document.getElementById("sideB").value)
    // 2. Calculate the hypotenuse using the Pythagorean theorem: c = √(a² + b²)
    hyp = (Math.sqrt((A**2) + (B**2)))
    // 3. Display the result in the hypotenuse span element
    document.getElementById("hypotenuse").textContent = + hyp

    // Note: Use Math.sqrt() for square root
}
