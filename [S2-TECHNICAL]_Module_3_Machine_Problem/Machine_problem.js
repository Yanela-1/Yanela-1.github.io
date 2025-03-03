let currentBox = null;

function showBox(day, color) {
    if (currentBox) {
        currentBox.style.top = "-100%";
        const newBox = createNewBox(day, color);
        setTimeout(() => {
            currentBox.remove();
            currentBox = newBox;
        }, 1000);
    } else {
        const newBox = createNewBox(day, color);
        currentBox = newBox;
    }
}

function createNewBox(day, color) {
    const newBox = document.createElement("div");
    newBox.className = "box";
    newBox.style.backgroundColor = color + "80"; 
    newBox.style.border = `3px solid ${color}`; 
    newBox.style.top = "-100%"; 
    document.body.appendChild(newBox);
    setTimeout(() => {
        newBox.style.top = "50%"; 
    }, 10);

    return newBox;
}
