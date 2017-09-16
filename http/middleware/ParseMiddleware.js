class ParseMiddleware {
    parse(req, res, next) {
        req.body.number1 = parseFloat(req.body.number1);
        req.body.number2 = parseFloat(req.body.number2);
        next();
    }
}

module.exports = ParseMiddleware;