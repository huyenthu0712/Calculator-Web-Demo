const Addition = require('./Addition');
const Subtraction = require('./Subtraction');
const Multiplication = require('./Multiplication');
const Division = require('./Division');

class Calculator {
    constructor() {
        this.operatorName = new Map();
        this.operatorName.set('add', new Addition());
        this.operatorName.set('subtract', new Subtraction());
        this.operatorName.set('multiply', new Multiplication());
        this.operatorName.set('divide', new Division());
    }

    calculate(operatorName, number1, number2) {
        return this.operatorName.get(operatorName).operate(number1, number2);
    }
}

module.exports = Calculator;