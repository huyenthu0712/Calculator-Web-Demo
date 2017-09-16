const Calculator = require('../../calculator/Calculator');
let calculate = new Calculator();

class CalculatorController {
    calculate(req, res) {
        let result = calculate.calculate(req.body.operator, req.body.number1, req.body.number2);
        return res.status(200).json(result);
    }
}

module.exports = CalculatorController;