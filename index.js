// Author: Szabó Kristóf Gyula
// Description: This is a simple web server for a calculator application.

// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Const variables
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));


// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST request
app.post('/', (req, res) => {
    // Get the numbers from the request
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);

    // Get the operation from the request
    const operation = req.body.operation;

    // Perform the operation
    let result;
    switch (operation) {
        case 'ADD':
            result = n1 + n2;
            break;
        case 'SUB':
            result = n1 - n2;
            break;
        case 'MUL':
            result = n1 * n2;
            break;
        case 'DIV':
            result = n1 / n2;
            break;
        default:
            result = 'Invalid operation';
    }

    // Send the result back
    res.send(`The result is: ${result}`);
});


// Start the server
app.listen(port, () => {
    console.log('Server is running on port 3000');
});