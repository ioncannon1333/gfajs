class animal{
    name:string;
    age:number;
    gender:string;
    constructor(name:string,age?:number,gender?:string){
        this.name=name;
        this.age=age===undefined?age:15
        this.gender=gender===undefined?gender:"female"
    }
    getName(){
       return this.name
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    breed(){}
}


class Mammal extends animal{
    breedtype='laying egg';
    breed(){
        return this.breedtype;
    }
}

class Reptile extends animal{
    breedtype='pushing miniature versions out';
    breed(){
        return this.breedtype;
    }
}

class Birds  extends animal{
    breedtype='laying egg';
    breed(){
        return this.breedtype;
    }
}

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Birds('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);