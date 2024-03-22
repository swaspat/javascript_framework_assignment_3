// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000;

// Define route to display group names
app.get('/', (req, res) => {
    // Send group names as a simple HTML response
    res.send('<h1>Group Names</h1><ul><li>Group 1</li><li>Group 2</li><li>Group 3</li></ul>');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
