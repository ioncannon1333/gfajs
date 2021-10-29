class PostIt {
    constructor(bg, text, color) {
        this.backgroundColor = bg;
        this.text = text;
        this.textColor = color;
    }
}

let exampleobj1 = new PostIt('orange', 'Idea 1', 'blue')
let exampleobj2 = new PostIt('pink', 'Awesome', 'black')
let exampleobj3 = new PostIt('yellow', 'Superb!', 'green')

console.log(exampleobj1)
console.log(exampleobj2)
console.log(exampleobj3)