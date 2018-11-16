function clearResult() {
    var input = document.getElementById('input');
    if (calcfinish) {
        input.value = '0';
        calcfinish = false;
    }
}
function numberInput(number) {
    var input = document.getElementById('input');
    clearResult();
    if (input.value === '0') input.value = '';
    input.value += number;
}

function decimal() {
    var input = document.getElementById('input');
    clearResult();
    if (input.value.indexOf('.') === -1) input.value += '.';
}

function inputOp(command) {
    var input = document.getElementById('input');
    calculate();
    inputnum = input.value;
    if (calculations.hasOwnProperty(command))
        operation = calculations[command];
}

function calculate() {
    var input = document.getElementById('input');
    input.value = operation(+inputnum, +input.value);
    calcfinish = true;
    operation = calculations.none;
}

calculations = {
    none:     function(left, right) { return right; },
    add:      function(left, right) { return left + right; },
    subtract: function(left, right) { return left - right; },
    multiply: function(left, right) { return left * right; }
}

if ('addEventListener' in window)
    window.addEventListener('load', clearInput);
else
    window.attachEvent('onload', clearInput);

function clearInput() {
    var input = document.getElementById('input');
    input.value = '0';
    inputnum = '0';
    calcfinish = true;
    operation = calculations.none;
}