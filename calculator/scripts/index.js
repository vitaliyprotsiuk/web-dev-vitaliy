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
    
    const regex = /(\d+)([\+\-\*\/])(\d+)/;
    const match = resInput.match(regex);
    
    if (match) {
        let firstNum = parseInt(match[1]);
        let operator = match[2];
        let secondNum = parseInt(match[3]);
        
        let result;
        if (operator == '-') {
            result = firstNum - secondNum;
        } else if (operator == '+') {
            result = firstNum + secondNum;
        } else if (operator == '*') {
            result = firstNum * secondNum;
        } else if (operator == '/') {
            if (secondNum === 0) {
                result = 'Error';
            } else {
                result = firstNum / secondNum;
            }
        }
        
        document.getElementById('results').value = result;
    } else {
        document.getElementById('results').value = 'Error';
    }
}