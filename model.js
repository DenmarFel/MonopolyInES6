import Player from "./player.js";
import Space from "./space.js";
import Property from "./property.js"
import Rental from "./rental.js"

export let players = [];
export let player_colors = ["#2C87AA", "#CD5334", "#674FD6", "#BC71B2", "#1B998B"];
export let turn;

export let spaces = [];
export let selected;

export function createPlayers(player_count) {
    let i;
    for (i = 0; i < player_count; i++) {
        let player_color = player_colors[i];
        let player = new Player("Player " + (i + 1), player_color);
        players.push(player);
    };
    let player;
    for (player of players) {
        player.display();
    };
}

export function changeTurn() {
    if (turn < players.length - 1) {
        turn++;
    } else {
        turn = 0;
    };
    selected = undefined;
    gamelog("It is " + players[turn].name + "'s turn!");
}

export function rollDice() {
    players[turn].rollDice();
    players[turn].update();
}

export function buy() {
    players[turn].buy();
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
    //name, position, cost, house_cost, rent, one_h, two_h, three_h, four_h, hotel
    spaces.push(new Space("Go", 0))
    spaces.push(new Rental("Mediterranean Avenue", 1, 60, 50, 2, 10, 30, 90, 160, 250, "brown"))
    spaces.push(new Space("Community Chest", 2))
    spaces.push(new Rental("Baltic Avenue", 3, 60, 50, 4, 20, 60, 180, 320, 450, "brown"))
    spaces.push(new Space("Income Tax", 4))
    spaces.push(new Property("Reading Railroad", 5, 200))
    spaces.push(new Rental("Oriental Avenue", 6, 100, 50, 6, 30, 90, 270, 400, 550, "light blue"))
    spaces.push(new Space("Chance", 7))
    spaces.push(new Rental("Vermont Avenue", 8, 100, 50, 6, 30, 90, 270, 400, 550, "light blue"))
    spaces.push(new Rental("Connecticut Avenue", 9, 120, 50, 8, 40, 100, 300, 450, 600, "light blue"))

    spaces.push(new Space("Jail", 10))
    spaces.push(new Rental("St. Charles Place", 11, 140, 100, 10, 50, 150, 450, 625, 750, "purple"))
    spaces.push(new Property("Electric Company", 12, 150))
    spaces.push(new Rental("States Avenue", 13, 140, 100, 10, 50, 150, 450, 625, 750, "purple"))
    spaces.push(new Rental("Virginia Avenue", 14, 160, 100, 12, 60, 180, 500, 700, 900, "purple"))
    spaces.push(new Property("Pennylvania Railroad", 15, 200))
    spaces.push(new Rental("St. James Place", 16, 180, 100, 14, 70, 200, 550, 750, 950, "orange"))
    spaces.push(new Space("Community Chest", 17))
    spaces.push(new Rental("Tennesse Avenue", 18, 180, 100, 14, 70, 200, 550, 750, 950, "orange"))
    spaces.push(new Rental("New York Avenue", 19, 200, 100, 16, 80, 220, 600, 800, 1000, "orange"))

    spaces.push(new Space("Free Parking", 20))
    spaces.push(new Rental("Kentucky Avenue", 21, 220, 150, 18, 90, 250, 700, 875, 1050, "red"))
    spaces.push(new Space("Chance", 22))
    spaces.push(new Rental("Indiana Avenue", 23, 220, 150, 18, 90, 250, 700, 875, 1050, "red"))
    spaces.push(new Rental("Illinois Avenue", 24, 240, 150, 20, 100, 300, 750, 925, 1100, "red"))
    spaces.push(new Property("B & O Railroad", 25, 200))
    spaces.push(new Rental("Atlantic Avenue", 26, 260, 150, 22, 110, 330, 800, 975, 1150, "yellow"))
    spaces.push(new Rental("Ventor Avenue", 27, 260, 150, 22, 110, 330, 800, 975, 1150, "yellow"))
    spaces.push(new Property("Water Works", 28, 150))
    spaces.push(new Rental("Marvin Gardens", 29, 280, 150, 24, 120, 360, 850, 1025, 1200, "yellow"))

    spaces.push(new Space("Go to Jail", 30))
    spaces.push(new Rental("Pacific Avenue", 31, 300, 200, 26, 130, 390, 900, 1100, 1275, "green"))
    spaces.push(new Rental("North Carolina Avenue", 32, 300, 200, 26, 130, 390, 900, 1100, 1275, "green"))
    spaces.push(new Space("Community Chest", 33))
    spaces.push(new Rental("Pennysylvania Avenue", 34, 320, 200, 28, 150, 450, 1000, 1200, 1400, "green"))
    spaces.push(new Property("Short Line", 35, 200))
    spaces.push(new Space("Chance", 2))
    spaces.push(new Rental("Park Place", 37, 350, 200, 35, 175, 500, 1100, 1300, 1500, "dark-blue"))
    spaces.push(new Space("Luxury Tax", 38))
    spaces.push(new Rental("Boardwalk", 39, 400, 200, 50, 600, 1400, 1700, 2000, "dark-blue"))
}

export function changeSelected(space) {
    space = Number(space.id.replace("pos", ""))
    selected = spaces[space]
    gamelog(selected.name + " is currently selected.")
}

export function upgrade() {
    // Called when user wants to add house to selected property
    if (selected != undefined && selected.houses < 5 && players[turn].hasMonopoly(selected)) {
        players[turn].pay(selected.house_cost)
        selected.upgrade()
    } else {
        alert("Error: no property selected or property can no longer be updated or player does not have Monopoly")
    }
}

export function downgrade() {
    // Called when user wants to remove house to selected property
    if (selected != undefined && selected.houses > 0 && players[turn].hasMonopoly(selected)) {
        players[turn].pay(-selected.house_cost / 2)
        selected.downgrade()
    } else {
        alert("Error: no property selected or property can no longer be updated or player does not have Monopoly")
    }

}