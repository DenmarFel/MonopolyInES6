import * as model from "./model.js";
import * as view from "./view.js";

var url = new URLSearchParams(location.search);
let player_count = url.get('player_count')

model.createPlayers(player_count);
console.log(model.players);
model.changeTurn();

document.getElementById("rotate").addEventListener("click", view.rotate);
document.getElementById("roll_dice").addEventListener("click", model.rollDice);
document.getElementById("end_turn").addEventListener("click", model.changeTurn);

let spaces = document.getElementsByClassName("space");
console.log(spaces)