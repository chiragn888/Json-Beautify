document.addEventListener("DOMContentLoaded", function() {
    // Attach the event listener to the beautify button
    document.getElementById("beautifyBtn").addEventListener("click", beautifyInput);
    // Attach the event listener to the format selector
    document.getElementById("formatSelector").addEventListener("change", function() {
        // This will set the beautification mode accordingly
        // No additional action needed at this point
    });
});

function detectXML(input) {
    // Simple check to see if input starts with XML declaration or a tag
    const trimmedInput = input.trim();
    return trimmedInput.startsWith("<?xml") || (trimmedInput.startsWith("<") && trimmedInput.endsWith(">"));
}

function beautifyXML(xmlInput) {
    // This is a placeholder for the actual XML beautification logic
    // For now, it just returns the input
    return xmlInput; // Replace with actual XML beautification logic
}

function beautifyInput() {
    const userInput = document.getElementById("jsonInput").value;
    const format = document.getElementById("formatSelector").value;

    if (format === "JSON") {
        beautifyJson();
    } else if (format === "XML" && detectXML(userInput)) {
        const beautifiedXML = beautifyXML(userInput);
        document.getElementById("jsonOutput").textContent = beautifiedXML;
    } else {
        document.getElementById("jsonOutput").textContent = "Invalid input. Please check your syntax.";
    }
}

function beautifyJson() {
    const userInput = document.getElementById("jsonInput").value;
    try {
        const parsedJson = JSON.parse(userInput.replace(/None/g, "null").replace(/False/g, "false").replace(/'/g, "\""));
        const beautifiedJson = JSON.stringify(parsedJson, null, 4);
        document.getElementById("jsonOutput").textContent = beautifiedJson;
    } catch (error) {
        document.getElementById("jsonOutput").textContent = "Invalid JSON input. Please check your JSON syntax.";
    }