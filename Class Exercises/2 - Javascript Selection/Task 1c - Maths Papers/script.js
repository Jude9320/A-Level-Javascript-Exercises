// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    let paper1 = parseInt(document.getElementById("paper1").value)
    let paper2 = parseInt(document.getElementById("paper2").value)
    let paper3 = parseInt(document.getElementById("paper3").value)
    // TODO: Calculate the total mark
    let total = (paper1) + (paper2) + (paper3)
    // TODO: Check if total is greater than 160
    if ((total) > (160)) {
        mark = "Pass"
    }else {
        mark = "Fail"
    }
    // TODO: Display the total mark and whether the student passed or failed
    document.getElementById("result").textContent = "Your mark was a " + mark

}
