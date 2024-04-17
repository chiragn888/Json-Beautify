// Import necessary dependencies
const express = require('express');
const xmlBeautify = require('xml-beautify');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and XML bodies
app.use(express.json());
app.use(express.text({ type: 'application/xml' }));

// Utility function to check if the input is XML
const isXML = (input) => input.startsWith('<');

// Route to handle POST requests to '/beautify'
app.post('/beautify', (req, res) => {
    const input = req.body;

    // Check if the input is XML
    if (isXML(input)) {
        try {
            // Beautify the XML input
            const beautifiedXML = xmlBeautify(input);
            res.send(beautifiedXML);
        } catch (error) {
            // Handle errors during XML beautification
            console.error('Error beautifying XML:', error);
            res.status(500).send(`Error beautifying XML: ${error.message}`);
        }
    } else {
        // Handle non-XML inputs
        res.status(400).send('Input is not valid XML');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```