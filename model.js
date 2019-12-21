import Player from "./player.js";

export let players = [];
export let turn;

export let spaces = [];

export function createPlayers(player_count) {
    let i;
    player_count++
    for (i = 1; i < player_count; i++) {
        let player = new Player(name = "Player " + i);
        players.push(player);
    };
}



export function changeTurn() {
    if (turn == undefined) {
        turn = 0
    } else if (turn < players.length - 1) {
        turn++
    } else {
        turn = 0
    };
    console.log("It is " + players[turn].name + "'s turn!")
}

export function rollDice() {
    players[turn].rollDice()
    players[turn].display()
}

