interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
  }


class Reservation implements Reservationy{
    constructor(){}
    getDowBooking(){
        var x:string;

        return x
    }
    getCodeBooking(){
        var x:string;
        let y:string="abcdefghijklmnopqrstuvwxyz0123456789"
        x=y.charAt(Math.floor(Math.random()*y.length))
        return x
    }
}