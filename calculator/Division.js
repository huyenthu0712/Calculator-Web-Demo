class Division {
    operate(number1, number2) {
        if (number2 === 0) {
            //throw new Error('Division by zero');
            return "Division by zero";
        }
        return number1 / number2;
    }
}

module.exports = Division;