export default class GameView{

    updateBoard(game){
        this.updateTurn(game);
        const winningCombinations = game.findWinningCombinations();
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      
            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";
           
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""} </span>`
            
            if(winningCombinations && winningCombinations.includes(i)){
                tile.classList.add("tile-winner");
                var div = document.getElementById('winner');
                div.innerHTML += 'Winner! ';
            }
       
        }
    }
    updateTurn(game){
        let playerX = document.querySelector(".player-X")
        let playerO = document.querySelector(".player-O");
        playerX.classList.remove('active');
        playerO.classList.remove('active');

        if (game.turn == 'X') {
           playerX.classList.add('active');
        } else {
            playerO.classList.add('active');
        }
    }
}


// const tile = document.querySelector(".board-tile [data-index='0']");

