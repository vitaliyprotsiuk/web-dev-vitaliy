let isXTurn = true;
let isGameEnded = false;
let xChoices = [];
let oChoices = [];
let xScre = 0;
let oScre = 0;

const winners = [
    [1, 2, 3], // Row 1
    [4, 5, 6], // Row 2
    [7, 8, 9], // Row 3
    [1, 4, 7], // Column 1
    [2, 5, 8], // Column 2
    [3, 6, 9], // Column 3
    [1, 5, 9], // Diagonal \
    [3, 5, 7]  // Diagonal /
]

function checkCombination(choices, combination) {
    for (let i = 0; i < combination.length; i++) {
        if (!choices.includes(combination[i].toString())) {
            return false;
        }
    }

    return true;
}

function checkWinners(choices) {
   for(let i = 0; i < winners.length; i++) {
     if (checkCombination(choices, winners[i])) {
         return true;
     }
   }

   return false;
}

function handleCellClick(event) {
    if (isGameEnded) {
        return; // Do nothing if the game has ended
    }

    const cell = event.target;
    const cellIndex = cell.dataset.index;
    console.log('Cell was clicked! + ' + cellIndex);
    const playerTurnEl = document.getElementById('playerTurn');
    if (cell.textContent === '') {
        if (isXTurn) {
            xChoices.push(cellIndex);
            cell.textContent = 'X';
            playerTurnEl.textContent = 'Player O\'s Turn';
        } else {
            oChoices.push(cellIndex);
            cell.textContent = 'O';
            playerTurnEl.textContent = 'Player X\'s Turn';
        }
        
        isXTurn = !isXTurn; 
    }

    if (checkWinners(xChoices)) {
        playerTurnEl.textContent = 'Player X Wins!';
        isGameEnded = true; // End the game if X wins
        xScre++;

        document.getElementById('score-x').textContent = xScre;
        document.getElementById('score-o').textContent = oScre;
    }
    else if (checkWinners(oChoices)) {
        playerTurnEl.textContent = 'Player O Wins!';
        isGameEnded = true; // End the game if O wins

        oScre++;
        document.getElementById('score-o').textContent = oScre;
        document.getElementById('score-x').textContent = xScre;
    } else if (xChoices.length + oChoices.length === 9) {
        playerTurnEl.textContent = 'It\'s a Draw!';
        isGameEnded = true; // End the game if it's a draw
    }
}

function resetGame() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    isGameEnded = false; 
    isXTurn = true; // Reset the turn to X
    xChoices = []; // Clear X's choices
    oChoices = []; // Clear O's choices
}