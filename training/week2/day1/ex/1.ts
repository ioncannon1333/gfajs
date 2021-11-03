class Instrument{
    names : string;
    constructor(names:string){
        this.names = names
    }
    play() {
    }
}

class StringedInstrument extends Instrument{
    numberOfString:number;
    sounds:string;
    constructor(names:string,numberOfString:number,sounds:string){
        super(names);
        this.numberOfString=numberOfString;
        this.sounds=sounds
    }
    sound(){
        console.log(this.sounds)
    }
    play(){
        console.log(this.names+this.numberOfString+this.sounds)
    }
}

class ElectricGuitar extends StringedInstrument{
    constructor(x?:number){
        super("Electric Guitar",x,"Twang")
        x===undefined?6:x
    }
}

class BassGuitar extends StringedInstrument{
    constructor(x?:number){
        super("Bass Guitar",x,"Duum-duum-duum");
        x===undefined?4:x
    }
}

class Violin extends StringedInstrument{
    constructor(x?:number){
        super("Violin",x,"Screech")
        x===undefined?4:x
    }
}


console.log(
    'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
  );
  const guitar = new ElectricGuitar();
  const bassGuitar = new BassGuitar();
  const violin = new Violin();
  
  console.log('Test 1 Play');
  guitar.play();
  bassGuitar.play();
  violin.play();
  
  console.log(
    'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
  );
  const guitar2 = new ElectricGuitar(7);
  const bassGuitar2 = new BassGuitar(5);
  
  console.log('Test 2 Play');
  guitar2.play();
  bassGuitar2.play();
  