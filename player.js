export default class Player {
    constructor(name = "", balance = 1500, position = 0, jailed = false) {
        this.name = name;
        this.balance = balance;
        this.position = position;
        this.jailed = jailed;
    }

    rollDice() {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let total = dice1 + dice2;
        console.log("Dice 1: " + dice1 + " Dice 2: " + dice2 + " Total: " + total);
        this.movePosition(total);
    }

    movePosition(increase = 0) {
        this.position = (this.position + increase) % 40
        console.log(this.name + " is now at position: " + this.position)
    }

    display() {
        // Create the element
        let rep = document.createElement("div");
        rep.id = this.name.toLowerCase().replace(" ", "")
        // Find appropriate space
        let space = document.getElementById("space" + this.position)
        
        
    }
}