module.exports.validate = function (req, res, next) {
    if (!req.body.number1) {
        res.status(422).json({"message": "Number 1 is required"});
    }
    if (!req.body.number2) {
        res.status(422).json({"message": "Number 2 is required"});
    }
    if (!req.body.operator) {
        res.status(422).json({"message": "Operator is required"});
    }
    if (isNaN(req.body.number1)) {
        res.status(422).json({"message": "Number 1 is not a number?"});
    }
    if (isNaN(req.body.number2)) {
        res.status(422).json({"message": "Number 2 is not a number?"});
    }
    if (req.body.operator == 'divide' && req.body.number2 == 0) {
        res.status(422).json({"message": "Number 2 is zero?"});
    }
    next();
}

module.exports.parse = function (req, res, next) {
    req.body.number1 = parseFloat(req.body.number1);
    req.body.number2 = parseFloat(req.body.number2);
    next();
}