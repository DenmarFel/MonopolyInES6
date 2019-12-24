export default class Space {
    constructor(name, position) {
        this.name = name
        this.position = position
        this.html_id = "pos" + this.position
    }
}