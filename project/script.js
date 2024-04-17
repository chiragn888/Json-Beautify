// Additions to the JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Update the event listener to call the new beautifyInput function
    document.getElementById("beautifyBtn").addEventListener("click", beautifyInput);
    // Update the format heading when the format selection changes
    document.getElementById("formatSelect").addEventListener("change", function() {
        document.getElementById("formatHeading").textContent = this.value;
    });
});

/**
 * Calls the appropriate beautify function based on the selected format.
 */
function beautifyInput() {
    const format = document.getElementById("formatSelect").value;
    const userInput = document.getElementById("jsonInput").value;
    if (format === "JSON") {
        beautifyJson(userInput);
    } else if (format === "XML") {
        beautifyXml(userInput);
    }
}

/**
 * Beautifies the XML input from the user and displays it in the output area.
 */
function beautifyXml(xmlInput) {
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlInput, "text/xml");
        const serializer = new XMLSerializer();
        const prettyXml = serializer.serializeToString(xmlDoc);
        document.getElementById("jsonOutput").textContent = prettyXml;
    } catch (error) {
        document.getElementById("jsonOutput").textContent = "Invalid XML input. Please check your XML syntax.";
    }
}

/**
 * Beautifies the JSON input from the user and displays it in the output area.
 */
function beautifyJson(jsonInput) {
    try {
        const parsedJson = JSON.parse(jsonInput);
        const beautifiedJson = JSON.stringify(parsedJson, null, 4);
        document.getElementById("jsonOutput").textContent = beautifiedJson;
    } catch (error) {
        document.getElementById("jsonOutput").textContent = "Invalid JSON input. Please check your JSON syntax.";
    }
}