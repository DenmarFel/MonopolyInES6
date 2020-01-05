import Property from "./property.js";

export default class Railroad extends Property {

    constructor(name, position, cost) {
        super(name, position, cost);
        this.penalty = 25;
        
    }
}