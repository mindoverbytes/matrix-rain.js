# Matrix Rain Animation

A simple Matrix Rain animation created using HTML, JavaScript, and CSS. This project creates the classic falling characters seen in "The Matrix" movie.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Adjustable Parameters](#adjustable-parameters)

## Description

This project creates a Matrix Rain animation with adjustable parameters. It uses HTML5 canvas to render the falling characters and provides options to customize the animation speed, background color, character color, and more.

The animation is created with the following components:

- **JavaScript (`matrix-rain.js`):** This file contains the main animation logic. It initializes the canvas, generates random characters, and animates their fall.

- **HTML (`index.html`):** The HTML file defines the structure of the webpage, including the canvas element where the animation is displayed.

- **CSS (`style.css`):** The CSS file contains styles for positioning the canvas and content container.

## Usage

To use this Matrix Rain animation in your project, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/mindoverbytes/matrix-rain.js.git
    ```

2. Open the index.html file in your web browser to view the animation.

3. Customize the animation by adjusting the parameters in the matrix-rain.js file, such as speed, background color, character color, and character size.

4. Feel free to integrate this animation into your own website or project by including the necessary HTML, JavaScript, and CSS files.

## Adjustable Parameters

You can customize the Matrix Rain animation by adjusting the following parameters in the `matrix-rain`.js file:

- `speed`: Adjust the speed of the falling characters (lower value = slower animation).
- `backgroundColorHex`: Change the background color in HEX format (e.g., #RRGGBB).
- `backgroundOpacity`: Adjust the background opacity (between 0 and 1).
- `characterColor`: Change the color of the falling characters.
- `characterSize`: Adjust the character size (in pixels).

    ```javascript
    // Adjustable parameters for the animation
    const speed = 0.5; // Adjust the speed (lower value = slower animation)
    const backgroundColorHex = "#000000"; // Adjust the background color in HEX format (e.g., "#RRGGBB")
    const backgroundOpacity = 0.09; // Adjust the background opacity (between 0 and 1)
    const characterColor = "#00ff00"; // Adjust the color of the falling characters
    const characterSize = 16; // Adjust the character size (in pixels)
    ```
