
document.addEventListener("DOMContentLoaded", function() {
    // Attach the event listener to the beautify button
    document.getElementById("beautifyBtn").addEventListener("click", beautifyJson);
});

/**
 * Beautifies the JSON input from the user and displays it in the output area.
 */
function beautifyJson() {
    // Retrieve the JSON input from the textarea
    const userInput = document.getElementById("jsonInput").value;

    try {
        // Parse the input to ensure it is valid JSON
        const parsedJson = JSON.parse(userInput.replace(/None/g, "null").replace(/False/g, "false").replace(/'/g, "\""));
        // Beautify the JSON string with indentation
        const beautifiedJson = JSON.stringify(parsedJson, null, 4);
        // Display the beautified JSON in the output area
        document.getElementById("jsonOutput").textContent = beautifiedJson;
    } catch (error) {
        // If an error occurs (e.g., invalid JSON), display an error message
        document.getElementById("jsonOutput").textContent = "Invalid JSON input. Please check your JSON syntax.";
    }
}
