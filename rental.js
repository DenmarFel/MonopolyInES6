import Property from "./property.js"

export default class Rental extends Property {

    constructor(name, position, cost, house_cost, rent, one_h, two_h, three_h, four_h, hotel, color) {
        super(name, position, cost);
        this.house_cost = house_cost;
        this.houses = 0;
        this.rent = rent;
        this.one_h = one_h;
        this.two_h = two_h;
        this.three_h = three_h;
        this.four_h = four_h;
        this.hotel = hotel;
        this.penalty = this.rent;
        this.color = color
        this.monopoly = false
    }

    changepenalty() {
        if (this.monopoly && this.houses == 0) {
            this.penalty = this.rent * 2
        } else if (this.houses == 0) {
            this.penalty = this.rent;
        } else if (this.houses == 1) {
            this.penalty = this.one_h;
        } else if (this.houses == 2) {
            this.penalty = this.two_h;
        } else if (this.houses == 3) {
            this.penalty = this.three_h;
        } else if (this.houses == 4) {
            this.penalty = this.four_h
        } else if (this.houses == 5) {
            this.penalty = this.hotel
        }
    }

    upgrade() {
        if (this.houses <  5 && this.isOwned()) {
            this.houses += 1;
            this.changepenalty();
        };
        this.update();
    }

    downgrade() {
        if (this.houses > 0) {
            this.houses -= 1;
            this.changepenalty();
        };
        this.update();
    }

    display() {
        super.display()
        let color_bar;
        color_bar = document.getElementById("pos" + this.position);
        color_bar = color_bar.getElementsByClassName("color-bar")[0];

        if (this.houses == 5) {
            let hotel;
            hotel = document.createElement("div");
            hotel.className = "hotel";

            let filler_div;
            filler_div = document.createElement("div");

            color_bar.appendChild(filler_div);
            color_bar.appendChild(hotel);

            hotel = document.createElement("div");
            hotel.className = "hotel";

            color_bar.appendChild(hotel);
        } else {
            let i;
            for (i = 0; i < this.houses; i++) {
                let house;
                house = document.createElement("div");
                house.className = "house";
                color_bar.appendChild(house);
            };
        };
    }

    remove() {
        let color_bar;
        color_bar = document.getElementById("pos" + this.position);
        color_bar = color_bar.getElementsByClassName("color-bar")[0]
        while (color_bar.firstChild) {
            color_bar.removeChild(color_bar.firstChild)
        }
    }

    update() {
        this.remove()
        this.display()
    }

}