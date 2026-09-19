// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let comp1 = parseInt(document.getElementById("comp1").value)
    let comp2 = parseInt(document.getElementById("comp2").value)
    let comp3 = parseInt(document.getElementById("comp3").value)
    let comp4 = parseInt(document.getElementById("comp4").value)
    // TODO: Calculate the total marks
    total = ((comp1) + (comp2) + (comp3) + (comp4))
    // TODO: Calculate the percentage (total possible marks is 400)
    let percent = ((total) / (400) * (100))
    // TODO: Determine the grade based on the percentage
    // A: 80% or greater
    if ((percent) >= 80) {
        grade = "A"
    // B: 70% or greater
    }else if ((percent) >= (70)) {
        grade = "B"
    // C: 60% or greater
    }else if ((percent) >= (60)) {
        grade = "C"
    // D: 50% or greater
    }else if ((percent) >= (50)) {
        grade = "D"
    // E: 40% or greater
    }else if ((percent) >= (40)) {
        grade = "E"
    // U: Less than 40%
    }else if ((percent) < (40)) {
        grade = "E"
    }
    // TODO: Display the percentage and grade
    document.getElementById("result").textContent = "Grade: " + grade
    document.getElementById("percentage").textContent = "percentage: " + percent
}
