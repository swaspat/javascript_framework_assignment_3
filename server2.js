// Import required modules
const express = require('express');
const fs = require('fs');

// Create an instance of Express
const app = express();
const port = 3000;

// Define route to display JSON contents
app.get('/data', (req, res) => {
    // Read JSON file
    fs.readFile('./data/data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Send raw JSON data as response
        res.send(data);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
