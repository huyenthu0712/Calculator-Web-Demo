const app= require('express')();
const bodyParser = require('body-parser');
const Validate = require('./http/middleware/ValidateMiddleware');
const Parse = require('./http/middleware/ParseMiddleware');
const CalculatorController = require('./http/controller/CalculatorController');

let validateMiddleware = new Validate();
let parseMiddleware = new Parse();
let calculatorController = new CalculatorController();

app.use(bodyParser.json('application/json'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendfile('view/calculator.html');
});

app.post('/answer', validateMiddleware.validate, parseMiddleware.parse, calculatorController.calculate);

app.listen(3001, function () {
    console.log("Listening on 3001!");
});