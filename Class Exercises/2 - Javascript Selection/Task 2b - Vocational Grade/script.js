// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});
let mark = ""
let average = 0
// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let theory = parseInt(document.getElementById("theory").value)
    let practical = parseInt(document.getElementById("practical").value)
    // TODO: Check if both scores are above 50% (Pass requirement)
    if (theory > 50 && practical > 50) {
        mark = "Pass"
    }else if (theory <= 50 && practical <= 50) {
        mark = "Fail"
    }else {
        mark = "Fail"
    } 
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
    average = (theory + practical) / 2
    if (mark == "Pass" && average > 70) {
        mark = "Distinction"
    }
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    document.getElementById("result").textContent = mark
    // Also display the average score
    document.getElementById("average").textContent = average + "%"
}
