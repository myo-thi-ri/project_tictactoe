import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick();
});
// gameView.updateBoard(game);
// console.log(game.board);
// console.log("My turn is", game.turn);
// console.log("Hello");
// game.nextTurn();
// console.log("My turn is", game.turn);
// game.makeMove(2);
// console.log(game.board);
// game.nextTurn();
// game.makeMove(5);
// console.log(game.board);
// gameView.updateBoard(game);

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);
  gameView.updateBoard(game);
  game.nextTurn();
}

function onRestartClick() {
  game = new Game();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
