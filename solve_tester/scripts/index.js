import { add, substract, multiply, divide } from './solve.js';

let currentExercise = 0;
let maxExercise;
let operator;
let a, b;
let correctResult;
let userResult;
let userCorrectAnswers = 0;
let userMark;
let aNumbers = [];
let bNumbers = [];

const succesLink = 'https://cdn-icons-png.flaticon.com/512/190/190411.png';
const failureLink = 'https://cdn-icons-png.flaticon.com/512/4225/4225690.png';


const manageMainDiv = (htmlCode) => {
    $('#main').html(`${htmlCode}`);
};


const addExercise = (htmlCode) => {
    $('#exercises').append(`${htmlCode}`);
};


const addToMainDiv = (htmlCode) => {
    $('#main').append(`${htmlCode}`);
};


const showChoiceAndNum = () => {
    manageMainDiv(`
        <div class="num-and-action">  
            <div id="num-of-exercise">
                <h2>К-сть прикладів і дія</h2>
                <input type="number" name="numOfExercise" id="numOfExercise" style="width: 200 !important;" class='numOfExercise-input'>
            </div>

            <div id="radio-buttons">
                <div class="radio rb">
                    <label class="rb-label"><input type="radio" name="optradio" id="optradio" value='+' checked>+</label>
                </div>
                <div class="radio rb">
                    <label class="rb-label"><input type="radio" name="optradio" id="optradio" value='-'>-</label>
                </div>
                <div class="radio rb">
                    <label class="rb-label"><input type="radio" name="optradio" id="optradio" value='*'>×</label>
                </div>
                <div class="radio rb">
                    <label class="rb-label"><input type="radio" name="optradio" id="optradio" value='/'>÷</label>
                </div>
                <button class="continue-btn" onclick="checkExercise1()">Продовжити</button>
            </div>
        </div>
    `);
};


const generateInt = (min, max) => {
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
};


const generateNumbers = () => {
    if (['+', '-'].includes(operator)) {
        a = generateInt(1, 100);
        b = generateInt(1, 100);

        if (operator == '-' && b > a) {
            let temp = b;
            b = a; 
            a = temp;
        };
    } else if (operator == '/') {
        b = generateInt(1, 10); 
        a = b * generateInt(1, 10);
    } else {
        a = generateInt(1, 10);
        b = generateInt(1, 10);
    };
};


const getCorrectResult = (i) => {
    const functions = {
        '+': add,
        '-': substract,
        '*': multiply,
        '/': divide
    };

    return functions[operator](aNumbers[i], bNumbers[i]);
};


const getMaxExercise = () => {
    const max = parseInt($('#numOfExercise').val());

    return max;
};


const getUserResult = (i) => {
    return $(`#userResult-${i}`).val();
};


const checkExercise = () => {
    currentExercise++;

    if ($('input[name="optradio"]:checked').length) {
        operator = $('input[name="optradio"]:checked').val();
    };

    if (!maxExercise) {
        maxExercise = getMaxExercise();
    };

    if (currentExercise <= maxExercise) {
        showExercise();
    } else if (currentExercise > maxExercise && maxExercise && maxExercise > 0) {
        calculateUserMark();

        manageMainDiv(`
            <h2 style="color: black;">Завдання завершені.</h2>
            <h2 style="color: black;">Ваша оцінка: ${userMark}!</h2>
        `);
    } else {
        manageMainDiv('<h2>Ви ввели неправильну кількість прикладів!</h2>');
    }
};


const checkExercise1 = () => {
    if ($('input[name="optradio"]:checked').length) {
        operator = $('input[name="optradio"]:checked').val();
    };

    if (!maxExercise) {
        maxExercise = getMaxExercise();
    };

    if (!$('#exercises').length) {
        manageMainDiv('<div id="exercises" style="display: flex; flex-direction: column;"></div>')
    };

    for (let i = 0; i < maxExercise; i++) {
        currentExercise++;
        
        showExercise(i);
    };

    addToMainDiv('<button class="continue-btn" onclick="checkAnswer()">Перевірити</button>')
};


const showExercise = (i) => {
    generateNumbers();

    aNumbers.push(a);
    bNumbers.push(b);

    addExercise(`
        <div id="showExercise-${i}" class="show-exercise">
                <div id="mainExercise-${i}" class="main-exercise">
                    <div id="firstNum-${i}" class="numbers">${a}</div>
                    <div id="operator-${i}" class="numbers">${operator}</div>
                    <div id="secondNum-${i}" class="numbers">${b}</div>
                    <div id="equal-${i}" class="numbers">=</div> 
                    <input type="number" name="user-result" id="userResult-${i}" class="user-result">
                </div>
        </div>
    `);
};


const checkAnswer = (i) => {
    for (let i = 0; i < maxExercise; i++) {
        correctResult = getCorrectResult(i); // to get a, b and correct result

        userResult = getUserResult(i);

        if (correctResult == userResult) {
            showSucces(i);
            userCorrectAnswers++;
        } else {
            showFailure(i);
        };
    };

    setTimeout(() => {
        showResult();
    }, 2000);
};


const showSucces = (numberOfEx) => {
    addStatus(succesLink, numberOfEx);
};


const showFailure = (numberOfEx) => {
    addStatus(failureLink, numberOfEx);
};


const addStatus = (imgLink, exNumber) => {
    $(`#mainExercise-${exNumber}`).append(`<img src="${imgLink}" alt="status" width="38px" class="status-icon">`)
};


const calculateUserMark = () => {
    userMark = Math.round((userCorrectAnswers / maxExercise) * 12);
};

const showResult = () => {
    calculateUserMark();

    manageMainDiv(`
        <h2 style="color: black;">Завдання завершені.</h2>
        <h2 style="color: black;">Ваша оцінка: ${userMark}!</h2>
    `);
};

window.checkExercise1 = checkExercise1;
window.checkAnswer = checkAnswer;
window.checkExercise = checkExercise;
window.showChoiceAndNum = showChoiceAndNum;

// events handler
$(document).on('keydown', (e) => {
    if (e.key === 'Enter') {
        if ($('#startBtn').length) {
            showChoice();
        };
    };
});


$(document).on('keydown', '#optradio', (event) => {
    if (event.key === 'Enter') {
        getNumOfExercise();
    };
});


$(document).on('keydown', '#userResult', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    };
});


$(document).on('keydown', '#numOfExercise', (event) => {
    if (event.key === 'Enter') {
        checkExercise();
    };
});