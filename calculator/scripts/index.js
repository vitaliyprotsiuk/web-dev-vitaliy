let operator;
operator = ''

function addItemToRes(item) {
    const resInput = document.getElementById('results');
    resInput.value += item;
};

function addOperator(item) {
    const resInput = document.getElementById('results');

    if (['*', '/', '+', '-'].some(op => resInput.value.includes(op))) {
        resInput.value = resInput.value.replace(/[\+\-\*\/]/, item);
        operator = item;
        return;
    }

    resInput.value += item;
    operator = item
};

function clearResults() {
    const resInput = document.getElementById('results');
    resInput.value = '';
};

function equalTo() {

    const resInput = document.getElementById('results').value;
    let firstPart = [];
    let secondPart = [];

    for (let item of resInput) {
        if (operator == '' ) {
            firstPart.push(item);
            continue;
        };

        if (['*', '/', '+', '-'].includes(item)) {
            operator = item;
        };

        if (operator != '') {
            secondPart.push(item);
        };
    }

    let firstNum = parseInt(firstPart.join(''));
    let secondNum = parseInt(secondPart.join(''));

    let result;
    if (operator == '-') {
        result = firstNum - secondNum;
    };
    if (operator == '+') {
        result = firstNum + secondNum;
    };
    if (operator == '*') {
        result = firstNum * secondNum;
    };
    if (operator == '/') {
        result = firstNum / secondNum;
    };

    document.getElementById('results').value = result;
}