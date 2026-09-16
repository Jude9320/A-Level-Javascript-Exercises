// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', checkNumber);
});

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    // TODO: Get the number from the input field
    let num = parseInt(document.getElementById("number").value)
    // TODO: Check if the number is positive, negative, or zero
    if((num) > (0)) {
        sign = "positive"
    }else if ((num) < (0)) {
        sign = "negative "
    }else if ((num) == (0)){
        sign = "zero"
    }
    
    // TODO: Display the appropriate message (POSITIVE, NEGATIVE, or ZERO)
    document.getElementById("result").textContent = "Result is " + sign 

}
