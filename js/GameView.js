export default class GameView {
  constructor() {
    console.log("Init GameView.");
  }
  updateBoard(game) {
    // console.log("this is game view");
    // console.log(game.board);
    this.winningCombination = game.findWinningCombinations();
    this.updateTurn(game);
    for (let i = 0; i < game.board.length; i++) {
      //   console.log(game.board[i]);

      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      // console.log(tile);

      tile.classList.remove("tile-winner");

      let tileType = game.board[i] == "X" ? "title-x" : "tile-o";
      // tile.textContent = game.board[i];
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (this.winningCombination && this.winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerO = document.querySelector(".player-O");
    // console.log(playerO);
    // console.log(playerX);
    playerO.classList.remove("active");
    playerX.classList.remove("active");
    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerO.classList.add("active");
    }
  }
}
