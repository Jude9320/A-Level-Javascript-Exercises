// Add event listeners to color inputs
document.getElementById('headingColor').addEventListener('input', updateColors);
document.getElementById('paragraphBg').addEventListener('input', updateColors);
document.getElementById('boxBg').addEventListener('input', updateColors);
document.getElementById('boxBorder').addEventListener('input', updateColors);

function updateColors() {
    // TODO:
    // 1. Get all color input values
    const headingColor = document.getElementById("headingColor").value
    const paragraphBg = document.getElementById("paragraphBg").value
    const boxBg = document.getElementById("boxBg").value
    const boxBorder = document.getElementById("boxBorder").value 
    // 2. Update the styles of each element:
    //    - Heading text color
    document.getElementById("previewHeading").style.color = headingColor
    //    - Paragraph background
    document.getElementById("previewParagraph").style.background = paragraphBg
    //    - Box background
    const previewBox = document.getElementById("previewBox")
    previewBox.style.backgroundColor = boxBg
    //    - Box border color
    previewBox.style.borderColor = boxBorder
    // 3. Update the color value displays with the current hex codes
    document.getElementById("headingColorValue").textContent = headingColor
    document.getElementById("paragraphBgValue").textContent = paragraphBg
    document.getElementById("boxBgValue").textContent = boxBg
    document.getElementById("boxBorderValue").textContent = boxBorder
    // Hint: To change styles use element.style.property = value
    // Example: element.style.color = '#FF0000'
}
