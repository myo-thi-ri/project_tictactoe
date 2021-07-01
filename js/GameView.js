export default class GameView {
  constructor() {
    console.log("Init GameView.");
  }
  updateBoard(game) {
    console.log("this is game view");
    console.log(game.board);
    for (let i = 0; i < game.board.length; i++) {
      //   console.log(game.board[i]);
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      console.log(tile);
      tile.textContent = game.board[i];
    }
  }
}
