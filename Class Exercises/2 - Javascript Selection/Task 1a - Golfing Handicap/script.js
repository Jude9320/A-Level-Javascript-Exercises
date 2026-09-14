// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', calculateLeague);
});

// Function to calculate which league the player belongs to
function calculateLeague() {
    // TODO: Get the handicap value from the input field
    let handicap = parseInt(document.getElementById("handicap").value)

    // TODO: Check if the handicap is less than 13
    if (handicap > 13) {
        document.getElementById("result").textContent = "You are in the A league"
    } else {
        document.getElementById("result").textContent = "You are in league B"

    }
}
