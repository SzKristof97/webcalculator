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

// serve the css file
app.use(express.static(__dirname + '/styles'));


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
    const operation = req.body.operator;

    // Perform the operation
    // In the future i'm gonna change this to a more readable and maintainable solution
    let result;
    switch (operation) {
        case 'add':
            result = n1 + n2;
            break;
        case 'sub':
            result = n1 - n2;
            break;
        case 'mul':
            result = n1 * n2;
            break;
        case 'div':
            result = n1 / n2;
            break;
        default:
            result = 'Invalid operation';
    }

    // Send the result back
    res.send(result.toString());
});


// Start the server
app.listen(port, () => {
    console.log('Server is running on port 3000');
});