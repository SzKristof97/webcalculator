module.exports = function(operation, n1, n2) {
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

    return result;
}