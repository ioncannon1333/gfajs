class plant {
    constructor(color, water) {
        this.water = water === undefined ? 0 : water;
        this.color = color
        this.type = 'plant'
    }
}

class flower extends plant {
    constructor(water) {
        super(water);
        this.type = 'flower'
        this.needs = 10
        this.absorb = 0.75
    }
}
class tree extends plant {
    constructor(water) {
        super(water);
        this.type = 'tree';
        this.needs = 10
        this.absorb = 0.4
    }
}

class garden {
    constructor() {
        this.plants = [];
    }
    watering(x) {
        let needs = 0;
        let perwater = 0;
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].water <= this.plants[i].needs) {
                needs++
            }
        }
        perwater = x / needs
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].water <= this.plants[i].needs) {
                this.plants[i].water = this.plants[i].water + (perwater * this.plants[i].absorb)
                console.log("The " + this.plants[i].color + " " + this.plants[i].type + " is watered")
                console.log("Now the " + this.plants[i].color + " " + this.plants[i].type + " have " + this.plants[i].water + " water")
            }
        }

    }
    static() {
        for (let i = 0; i < this.plants.length; i++) {
            this.plants[i].water >= this.plants[i].needs ?
                console.log("The " + this.plants[i].color + " " + this.plants[i].type + " doesnt needs water") :
                console.log("The " + this.plants[i].color + " " + this.plants[i].type + " needs water")
        }
    }
    add(plant) {
        this.plants.push(plant)
    }
}


const garden1 = new garden
const whiteflower = new flower("white")
const blackflower = new flower("black")

const bluetree = new tree("blue")
garden1.add(whiteflower)
garden1.add(blackflower)

garden1.static()
garden1.watering(4)
garden1.static()

garden1.add(bluetree)

garden1.static()

garden1.watering(10)

garden1.static()