import Space from "./space.js"

export default class Property extends Space {
    constructor(name, position, cost){
        super(name, position)
        this.cost = cost
        this.mortgage = this.cost / 2
        this.owner = undefined
    }

    display() {
        if (this.owner != undefined) {
            let space = document.getElementById(this.html_id);
            space.style.borderTop = "5px solid " + this.owner.color
        }
    }
}