const app= require('express')();
const bodyParser = require('body-parser');
const dataFilter = require('./http/middleware/dataFilterMiddleware');
const calculatorController = require('./http/controller/calculatorController');

app.use(bodyParser.json('application/json'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendfile('view/calculator.html');
});

app.post('/answer', dataFilter.validate, dataFilter.parse, calculatorController);

app.listen(3000, function () {
    console.log("Listening on 3000!");
});