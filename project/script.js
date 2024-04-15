/**
 * Beautifies the provided JSON input.
 * @param {string} jsonInput - The JSON string to beautify.
 * @returns {string} The beautified JSON string.
 */
function beautifyJSON(jsonInput) {
    try {
        // Parse the JSON input to an object
        const jsonObject = JSON.parse(jsonInput);
        // Stringify the object with indentation for beautification
        const beautifiedJSON = JSON.stringify(jsonObject, null, 4);
        return beautifiedJSON;
    } catch (error) {
        // Return an error message if the input is not valid JSON
        return "Error: The provided input is not valid JSON.";
    }
}

/**
 * Updates the display with the beautified JSON.
 * @param {string} beautifiedJSON - The beautified JSON string to display.
 */
function updateDisplay(beautifiedJSON) {
    // Select the element where the beautified JSON will be displayed
    const displayElement = document.getElementById("jsonDisplay");
    // Update the text content of the display element
    displayElement.textContent = beautifiedJSON;
}

/**
 * Beautifies the JSON input retrieved from the textarea element.
 */
function beautifyJson() {
    // Select the textarea element where the user enters JSON
    const inputElement = document.getElementById("jsonInput");
    // Get the value of the input element
    const jsonInput = inputElement.value;
    // Beautify the input JSON
    const beautifiedJSON = beautifyJSON(jsonInput);
    // Update the display with the beautified JSON
    updateDisplay(beautifiedJSON);
}

// Add event listener to the 'Beautify JSON' button
document.addEventListener("DOMContentLoaded", function() {
    // Select the 'Beautify JSON' button
    const beautifyButton = document.getElementById("beautifyBtn"); // Updated ID to match the plan
    // Add click event listener to the button
    beautifyButton.addEventListener("click", beautifyJson); // Updated to call the new function