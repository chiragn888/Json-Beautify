// Import the express library
const express = require('express');

// Initialize the express application
const app = express();

// Define the port to listen on
const PORT = 3000;

// Set up a route to listen for GET requests on the root path ('/')
app.get('/', (req, res) => {
    // Dynamically generate the HTML content
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Web Server</title>
        </head>
        <body>
            <h1>xml/json</h1>
        </body>
        </html>
    `;

    // Send the generated HTML as the response
    res.send(htmlContent);
});

// Make the server listen on the predefined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```