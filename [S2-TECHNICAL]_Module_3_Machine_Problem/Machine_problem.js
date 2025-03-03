let currentBox = null;

function showBox(day, color) {
    if (currentBox) {
        // Slide the current box completely out of the screen upwards
        currentBox.style.top = "-100%"; // Move the old box off-screen

        // Create the new box, but don't remove the old box until the transition completes
        const newBox = createNewBox(day, color);

        // Wait until the old box has fully slid out before removing it
        setTimeout(() => {
            currentBox.remove(); // Remove the old box after it slides out
            currentBox = newBox; // Update the currentBox reference
        }, 1000); // Wait for the full slide-out transition
    } else {
        // If no box exists, just create the first one
        const newBox = createNewBox(day, color);
        currentBox = newBox; // Set the currentBox reference
    }
}

function createNewBox(day, color) {
    const newBox = document.createElement("div");
    newBox.className = "box";
    newBox.style.backgroundColor = color + "80"; 
    newBox.style.border = `3px solid ${color}`; 

    // Initially position the new box off-screen (above the viewport)
    newBox.style.top = "-100%"; 

    // Append the new box to the body
    document.body.appendChild(newBox);

    // Slide the new box into view after a short delay
    setTimeout(() => {
        newBox.style.top = "50%";  // Slide the new box down into the center of the screen
    }, 10);

    return newBox;
}
