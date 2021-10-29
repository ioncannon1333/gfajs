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

let bird = new Animal()


bird.eat()
console.log(bird)
bird.drink()
console.log(bird)
bird.play()
console.log(bird)