class Sharpie {
    constructor(color, width) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }
    use() {
        this.inkAmount = this.inkAmount - 1;
    }
}

class SharpieSet {
    constructor(Sharpie) {
        this.Sharpies = Sharpie
    }
    countUsable() {
        if (this.Sharpies.inkAmount === 0) {
            console.log('here find an unusable sharpie')
            return 'unusable'
        } else {
            console.log('here havent unusable sharpie')
        }
    }
    removeTrash() {
        let x = this.countUsable()
        if (x === 'unusable') {
            delete this.Sharpie
        }
    }
}

let b = new Sharpie
let a = new SharpieSet(b)

console.log(a.Sharpies)
a.countUsable()