class Animal {
    constructor() {
        this.hunger = 50;
        this.thirst = 50;
    }
    eat() {
        this.hunger = this.hunger + 1;
    }
    drink() {
        this.thirst = this.thirst + 1;
    }
    play() {
        this.hunger = this.hunger - 1;
        this.thirst = this.thirst - 1;
    }
}


class Farm {
    constructor() {
        this.Animals = []
        this.slots = 20
    }
    breed() {
        if (this.slots > 0) {
            this.Animals.push(Animal)
            this.slots--
        }
    }
    salughter() {
        let tmp = 0;
        let tmp2 = 0;
        for (let i = 0; i < Object.keys(Animal).length; i++) {
            if (this.Animals[i].hunger <= tmp) {
                tmp = this.Animals[i].hunger
                tmp2 = i;
            }
        }
        delete this.Animals[tmp2]
    }
}