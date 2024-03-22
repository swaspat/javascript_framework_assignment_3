// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000;

// Express middleware to parse JSON bodies
app.use(express.json());

// Sample JSON data for testing
let jsonData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

// Route to demonstrate CRUD operations (POST)
app.post('/items', (req, res) => {
    // Extract data from request body
    const newItem = req.body;
    // Add new item to JSON data
    jsonData.push(newItem);
    // Send updated JSON data as response
    res.json(jsonData);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
