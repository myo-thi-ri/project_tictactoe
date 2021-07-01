import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);
console.log(game.board);
console.log("My turn is", game.turn);
console.log("Hello");
game.nextTurn();
console.log("My turn is", game.turn);
game.makeMove(2);
console.log(game.board);
game.nextTurn();
game.makeMove(5);
console.log(game.board);
gameView.updateBoard(game);
