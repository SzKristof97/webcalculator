// Enum for operations
const Operation = {
    ADD: 'ADD',
    SUB: 'SUB',
    MUL: 'MUL',
    DIV: 'DIV'
};

// Object to map operations to functions
const operationFunctions = {
    [Operation.ADD]: (num1, num2) => num1 + num2,
    [Operation.SUB]: (num1, num2) => num1 - num2,
    [Operation.MUL]: (num1, num2) => num1 * num2,
    [Operation.DIV]: (num1, num2) => num1 / num2
};

// Method to perform operation
function performOperation(num1, num2, operation) {
    const operationFunction = operationFunctions[operation];
    if (operationFunction) {
        return operationFunction(num1, num2);
    } else {
        throw new Error('Invalid operation');
    }
}

// Example usage
const result = performOperation(5, 3, Operation.ADD);
console.log(result); // Output: 8