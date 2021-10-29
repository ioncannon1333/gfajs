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

let tmpobj = new Sharpie('blue', '2')

tmpobj.use()
console.log(tmpobj)