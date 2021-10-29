class Counter {
    constructor() {
        this.number = 0;
    }
    add(x) {
        if (x === undefined) {
            this.number++
        } else {
            this.number += x
        }
    }
    get() {
        console.log(this.number)
    }
    reset() {
        this.number = 0;
    }
}

let tmp = new Counter

console.log(tmp)
tmp.add()
console.log(tmp)
tmp.add(20)
console.log(tmp)
tmp.reset()
console.log(tmp)