import {spaces, gamelog} from "./model.js"

export default class Player {

    constructor(name, color, balance = 1500, position = 0, jailed = false) {
        this.name = name;
        this.color = color;
        this.balance = balance;
        this.position = position;
        this.jailed = jailed;
        this.properties = [];
    }

    rollDice() {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let total = dice1 + dice2;
        gamelog(this.name + " rolled a " + dice1 + " and " + dice2 + " for " + total);
        this.movePosition(total);
    }

    movePosition(increase = 0) {
        let new_position = (this.position + increase) % 40;
        // Passing Go
        if (new_position < this.position) {
            this.balance += 200;
        };
        // Income Tax 
        if (new_position == 4) {
            this.balance -= 200;
        };
        // Luxury Tax
        if (new_position == 38) {
            this.balance -= 100;
        };
        // Go to Jail
        if (new_position == 30) {
            new_position = 10;
        };

        this.position = new_position;
        this.update();
        gamelog(this.name + " is now at " + spaces[this.position].name);
    }

    display() {
        // BOARD
        // Create the element
        let boardrep = document.createElement("div");
        boardrep.id = this.name.toLowerCase().replace(" ", "");
        // Find appropriate space
        let space = document.getElementById("pos" + this.position);
        space.appendChild(boardrep);

        // STATS
        let x = this.name.toLowerCase().replace(" ", "") + "stats";
        let oldstatsrep = document.getElementById(x);
        let statsrep = document.createElement("div");
        statsrep.id = this.name.toLowerCase().replace(" ", "") + "stats";
        statsrep.innerHTML = this.name + " $" + this.balance;
        let players_tab = document.getElementById("players-tab");
        if (oldstatsrep == undefined) {
            players_tab.appendChild(statsrep);
        } else {
            players_tab.replaceChild(statsrep, oldstatsrep);
        }
    }

    delete() {
        let oldboardrep = document.getElementById(this.name.toLowerCase().replace(" ", ""));
        if (oldboardrep != undefined ) {
            oldboardrep.remove();
        };
    }

    update() {
        this.delete();
        this.display();
    }

    buy() {
        let property = spaces[this.position]
        if (this.balance >= property.cost && property.owner == undefined)  {
            this.balance -= property.cost
            this.properties.push(property)
            property.owner = this
            property.display()
            gamelog(this.name + " bought " + property.name + " for $" + property.cost)
        }
        this.update()
    }
}