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
document.getElementById("upgrade").addEventListener("click", model.upgrade);
document.getElementById("downgrade").addEventListener("click", model.downgrade);
document.getElementById("rotate").addEventListener("click", view.rotate);

let spaces = document.getElementsByClassName("space");
console.log(spaces);
Object.entries(spaces).forEach(function ([key,space]) {
    space.addEventListener("mouseover", function () {
        space.style.color = model.players[model.turn].color;
        space.style.backgroundColor = "#CBE9E1";
        space.style.zIndex = "1";
    });
    space.addEventListener("mouseout", function () {
        space.style.color = "";
        space.style.zIndex = "0";
    });
    space.addEventListener("click", function () {
        model.changeSelected(space)
    });

});
