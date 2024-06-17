var assert = require('assert');
var calculate = require('../scripts/calculation');

describe('Calculation Tests', function () {
    describe('Addition Tests', function () {
        it('Should return 5 when adding 2 and 3', function () {
            assert.equal(calculate('add', 2, 3), 5);
        });

        it('Should return 7 when adding 3 and 4', function () {
            assert.equal(calculate('add', 3, 4), 7);
        });
    });

    describe('Subtraction Tests', function () {
        it('Should return 1 when subtracting 3 from 4', function () {
            assert.equal(calculate('sub', 4, 3), 1);
        });

        it('Should return -1 when subtracting 3 from 2', function () {
            assert.equal(calculate('sub', 2, 3), -1);
        });
    });

    describe('Multiplication Tests', function () {
        it('Should return 6 when multiplying 2 and 3', function () {
            assert.equal(calculate('mul', 2, 3), 6);
        });

        it('Should return 12 when multiplying 3 and 4', function () {
            assert.equal(calculate('mul', 3, 4), 12);
        });
    });

    describe('Division Tests', function () {
        it('Should return 2 when dividing 6 by 3', function () {
            assert.equal(calculate('div', 6, 3), 2);
        });

        it('Should return 3 when dividing 12 by 4', function () {
            assert.equal(calculate('div', 12, 4), 3);
        });
    });
});