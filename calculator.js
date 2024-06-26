const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Addition Calculator
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send('The answer is ' + result);
});

//bmi calculator
app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res){

  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / (height ** 2);

  res.send('The BMI is ' + bmi);
});

app.listen(3000, function(){
  console.log('Server is listening on port 3000');
});
