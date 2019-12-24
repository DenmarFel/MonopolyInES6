import * as model from "./model.js";
import * as view from "./view.js";

var url = new URLSearchParams(location.search);
let player_count = url.get('player_count')

// Init Players
model.createPlayers(player_count);
model.changeTurn();

// Init Spaces
model.createSpaces();

document.getElementById("roll_dice").addEventListener("click", model.rollDice);
document.getElementById("end_turn").addEventListener("click", model.changeTurn);
document.getElementById("buy").addEventListener("click", model.buy);
document.getElementById("rotate").addEventListener("click", view.rotate);