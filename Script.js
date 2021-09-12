const Calculator = {
    plus: function(a, b){ return a+b; },
    minus: function (a,b) { return a-b; },
    multi: function (a,b) { return a*b; },
    divide: function (a,b) { return a/b; },
    power: function (a,b) { return a**b; },
};

result = Calculator.plus(10,5);
console.log(result);
result = Calculator.multi(10,5);
console.log(result);
result = Calculator.minus(10,5);
console.log(result);
result = Calculator.divide(10,5);
console.log(result);
result = Calculator.power(10,5);
console.log(result);