const Game = (() => {
    var board = Array.apply(null, Array(9)).map(function () {});
    var winner;
    var draw = function(){
        
    };
    return {
        board,
        winner,
        draw
    }
  })();

const createPlayer = (symbol, turn) => {
    const endTurn = () => turn = !turn;
    return { symbol, turn, endTurn};
};

const P1 = createPlayer("X", true);
const P2 = createPlayer("O", false);

Game.board = ['X','X', 'X', 'O', 'O', 'O', 'X','X', 'X'];
Game.draw();






        // draw_board.innerHTML = '';
        // const draw_board = document.querySelector('#draw_board');
        // const row1 = document.createElement('div');
        // const row2 = document.createElement('div');
        // const row3 = document.createElement('div');
        // draw_board.appendChild(row1, row2, row3);
        // for (let i = 1; i <= 9; i++) {
        //     const square = document.createElement('div');
        //     square.id = `square_${i}`;
        //     if (Math.ceil(i/3) = 1){
        //         row1.appendChild(square);
        //     }
        //     else if (Math.ceil(i/3) = 2){
        //         row2.appendChild(square);
        //     }
        //     else if (Math.ceil(i/3) = 3){
        //         row3.appendChild(square);
        //     }
        // }