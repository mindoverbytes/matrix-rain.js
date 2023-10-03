// Get the canvas element and its 2D rendering context
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

let columns;
let charSize;
let matrix = [];

// Define the characters used in the matrix animation
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/\\|";

// Adjustable parameters for the animation
const speed = 0.5; // Adjust the speed (lower value = slower animation)
const backgroundColorHex = "#000000"; // Adjust the background color in HEX format (e.g., "#RRGGBB")
const backgroundOpacity = 0.09; // Adjust the background opacity (between 0 and 1)
const characterColor = "#ff0000"; // Adjust the color of the falling characters
const characterSize = 16; // Adjust the character size (in pixels)

// Function to initialize the matrix animation
function initializeMatrix() {
    // Set the canvas size to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate the number of columns and the size of each character
    columns = Math.floor(canvas.width / characterSize);
    charSize = characterSize;

    // Initialize the matrix array
    matrix = [];
    for (let i = 0; i < columns; i++) {
        // Randomly assign a starting position for each column
        matrix[i] = Math.floor(Math.random() * canvas.height / charSize) + 1;
    }
}

// Function to draw the matrix animation
function drawMatrix() {
    // Set the background color and fill the entire canvas
    const red = parseInt(backgroundColorHex.slice(1, 3), 16);
    const green = parseInt(backgroundColorHex.slice(3, 5), 16);
    const blue = parseInt(backgroundColorHex.slice(5, 7), 16);
    
    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${backgroundOpacity})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the font size and style
    ctx.font = charSize + "px monospace";

    // Loop through each column
    for (let i = 0; i < columns; i++) {
        // Choose a random character from the character set
        const char = characters[Math.floor(Math.random() * characters.length)];

        // Calculate the position of the character
        const x = i * charSize;
        let y = matrix[i] * charSize;

        // If the character reaches the bottom of the canvas and a random condition is met, reset its position
        if (y >= canvas.height && Math.random() > 0.975) {
            y = 0;
            matrix[i] = 0;
        }

        // Calculate the opacity based on the character's position
        const opacity = 1 - (matrix[i] / canvas.height); // Decrease opacity as characters descend

        // Create the color with the adjusted opacity
        const color = `rgba(${parseInt(characterColor.slice(1, 3), 16)}, ${parseInt(characterColor.slice(3, 5), 16)}, ${parseInt(characterColor.slice(5, 7), 16)}, ${opacity.toFixed(2)})`;

        // Set the color of the falling characters
        ctx.fillStyle = color;

        // Draw the character at the calculated position
        ctx.fillText(char, x, y);

        // Update the position of the character for the next frame
        matrix[i] += speed;
    }
}

// Function to adjust the canvas size when the window is resized
function adjustCanvasSize() {
    // Reinitialize the matrix animation to match the new canvas size
    initializeMatrix();
    // Redraw the matrix animation
    drawMatrix();
}

// Function to animate the matrix
function animate() {
    // Request the next animation frame
    requestAnimationFrame(animate);
    // Draw the matrix animation
    drawMatrix();
}

// Initial setup
initializeMatrix();
// Listen for window resize events and adjust the canvas size accordingly
window.addEventListener("resize", adjustCanvasSize);
// Start the animation
animate();
