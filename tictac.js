const createPlayer = (symbol) => {
    return {symbol};
};

const Game = (() => {
    const player_X = createPlayer("X");
    const player_O = createPlayer("O");
    
    let gameOver = false;

    let turn = player_X;
    const label = document.getElementById('label');
    function nextTurn() {
        if (!Game.gameOver){
            if (this.turn == player_X) this.turn = player_O;
            else this.turn = player_X;
            label.textContent = `${this.turn.symbol}'s Turn`
        }
    };

    function checkWin() {
        const label = document.getElementById('label');

        const winningLines = [ 
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        winningLines.forEach((line) => {
            if (gameBoard.board[line[0]] === this.turn.symbol && gameBoard.board[line[1]] === this.turn.symbol && gameBoard.board[line[2]] === this.turn.symbol) {
                label.textContent = `${this.turn.symbol} is the winner!!`
                this.gameOver = true;
            }
        })
        
        if (!gameOver && !gameBoard.board.includes('')) label.textContent = "It's a Tie!";
    };

    return {
        turn,
        nextTurn,
        checkWin,
        gameOver,
    }
  })();

const gameBoard = (() => {

    let board = [];
    for (let i = 0; i < 9; i++) {
       board.push(''); 
    }

    let cells = document.querySelector('.cells');

    board.forEach((item, index) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cells.appendChild(cell);
        cell.addEventListener('click', ()=> {
            if (!Game.gameOver){
                const symbol = Game.turn.symbol;
                const mark = document.createElement('h1');
                mark.textContent = symbol
                cell.appendChild(mark);
                board[index] = symbol
                Game.checkWin();
                Game.nextTurn();
                cell.style.pointerEvents = 'none';
            }
        })
    })

    return{
        board
    };
})();

