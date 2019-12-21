export default class Space {
    constructor(name, position) {
        this.name = name
        this.position = position
        this.html_id = "space" + this.position
        console.log(this.name + " created wtih id: " + this.html_id)
    }
}