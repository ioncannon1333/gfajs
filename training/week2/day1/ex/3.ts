interface Flyable{
    land()
    fly()
    takeOff()
}


class Vehicle{
    weight:number;
    color:string;
    type:string;
    constructor(weight:number,color:string,type:string){
        this.weight = weight;
        this.color=color;
        this.type=type;
    }
}

class Helicopter extends Vehicle implements Flyable {
    speed=30
    land(){}
    fly(){}
    takeOff(){}
}


class Bird extends animal implements Flyable {
    land(){}
    fly(){}
    takeOff(){}
}