class station {
    constructor() {
        this.gasAmount = 500
    }
    refill(car) {
        this.gasAmount = this.gasAmount - car.capacity + car.gasAmount
        car.gasAmount = car.capacity
    }
}


class car {
    constructor() {
        this.gasAmount = 0
        this.capacity = 100
    }
}