import Player from "./player.js";
import Space from "./space.js";
import Property from "./property.js"

export let players = [];
export let player_colors = ["#2C87AA", "#CD5334", "#674FD6", "#BC71B2", "#1B998B"];
export let turn;

export let spaces = [];

export function createPlayers(player_count) {
    let i;
    for (i = 0; i < player_count; i++) {
        let player_color = player_colors[i];
        let player = new Player("Player " + (i + 1), player_color);
        players.push(player);
    };
    let player;
    for (player of players) {
        player.display()
    }
}

export function changeTurn() {
    if (turn < players.length - 1) {
        turn++
    } else {
        turn = 0
    };
    gamelog("It is " + players[turn].name + "'s turn!")
}

export function rollDice() {
    players[turn].rollDice()
    players[turn].update()
}

export function buy() {
    players[turn].buy()
}

export function gamelog(msg) {
    let msgboard = document.getElementById("gamelog");
    let date = new Date()
    msg = document.createTextNode(date.toLocaleTimeString() + ": " + msg);
    let newmsg = document.createElement("li");
    newmsg.appendChild(msg);
    msgboard.appendChild(newmsg);
    
    // Auto Scrolls to Bottom
    msgboard.scrollTop = msgboard.scrollHeight;

}

export function createSpaces() {
    spaces.push(new Space("Go", 0))
    spaces.push(new Property("Mediterranean Avenue", 1, 60))
    spaces.push(new Space("Community Chest", 2))
    spaces.push(new Property("Baltic Avenue", 3, 60))
    spaces.push(new Space("Income Tax", 4))
    spaces.push(new Property("Reading Railroad", 5, 200))
    spaces.push(new Property("Oriental Avenue", 6, 100))
    spaces.push(new Space("Chance", 7))
    spaces.push(new Property("Vermont Avenue", 8, 100))
    spaces.push(new Property("Connecticut Avenue", 9, 120))
    spaces.push(new Space("Jail", 10))
    spaces.push(new Property("St. Charles Place", 11, 140))
    spaces.push(new Property("Electric Company", 12, 150))
    spaces.push(new Property("States Avenue", 13, 140))
    spaces.push(new Property("Virginia Avenue", 14, 160))
    spaces.push(new Property("Pennylvania Railroad", 15, 200))
    spaces.push(new Property("St. James Place", 16, 180))
    spaces.push(new Space("Community Chest", 17))
    spaces.push(new Property("Tennesse Avenue", 18, 180))
    spaces.push(new Property("New York Avenue", 19, 200))
    spaces.push(new Space("Free Parking", 20))
    spaces.push(new Property("Kentucky Avenue", 21, 220))
    spaces.push(new Space("Chance", 22))
    spaces.push(new Property("Indiana Avenue", 23, 220))
    spaces.push(new Property("Illinois Avenue", 24, 240))
    spaces.push(new Property("B & O Railroad", 25, 200))
    spaces.push(new Property("Atlantic Avenue", 26, 260))
    spaces.push(new Property("Ventor Avenue", 27, 260))
    spaces.push(new Property("Water Works", 28, 150))
    spaces.push(new Property("Marvin Gardens", 29, 280))
    spaces.push(new Space("Go to Jail", 30))
    spaces.push(new Property("Pacific Avenue", 31, 300))
    spaces.push(new Property("North Carolina Avenue", 32, 300))
    spaces.push(new Space("Community Chest", 33))
    spaces.push(new Property("Pennysylvania Avenue", 34, 320))
    spaces.push(new Property("Short Line", 35, 200))
    spaces.push(new Space("Chance", 2))
    spaces.push(new Property("Park Place", 37, 350))
    spaces.push(new Space("Luxury Tax", 38))
    spaces.push(new Property("Boardwalk", 39, 400))
}

