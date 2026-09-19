// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let theory = parseInt(document.getElementById("theory").value)
    let practical = parseInt(document.getElementById("practical").value)
    // TODO: Check if both scores are above 50% (Pass requirement)
    let total = theory + practical
    let averageOutput
    let passMark = theory > 50 && practical > 50 ? 'passed' : 'failed'
    
    if (passMark == 'failed') {
           document.getElementById('result').textContent = `You have ${passMark}`
    }else {
        averageOutput = total / 2   
    }
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
   
 if (averageOutput <= 70) {
  document.getElementById('result').textContent = `You have ${passMark}`
} else {
  passMark = 'distinction'
     }
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    document.getElementById("result").textContent = `Congrats! You have ${passMark}`
    // Also display the average score
    
    

    }
