class Aircrafts {
    constructor(ammunition, maxammo, basedamage, priority) {
        this.ammunition = ammunition === undefined ? 0 : ammunition;
        this.maxammo = maxammo === undefined ? 0 : maxammo;
        this.basedamage = basedamage === undefined ? 0 : basedamage;
        this.priority = priority === undefined ? 0 : priority; // default priority at the last.
    }
    getType() {
        console.log(this.type)
    }
    getStatus() {
        console.log("Type " + this.type + ", Ammo: " + this.ammunition +
            ", Base Damage: " + this.basedamage +
            ", All Damage: " + this.basedamage * this.ammunition)
    }
    fight() {
        let damage = this.basedamage * this.ammunition;
        this.ammunition = 0;
        return damage;
    }
    refill(x) {
        this.ammunition = this.ammunition + x;
    }
}

class f16 extends Aircrafts {
    constructor() {
        super(0, 8, 30, 5);
        this.type = 'F16';
    }
}

class f35 extends Aircrafts {
    constructor() {
        super(0, 12, 50, 2);
        this.type = 'F35';
    }
}

class Carrier {
    constructor() {
        this.store = [];
        this.ammorepresented = 2500;
        this.health = 5000;
    }
    add(Aircrafts) {
        this.store.push(new Aircrafts)
    }
    fill() {
        let y = 0; //count all needed ammo
        for (let i = 0; i < this.store.length; i++) {
            y = y + this.store[i].maxammo - this.store[i].ammunition
        }

        if (this.ammorepresented >= y) {
            for (let i = 0; i < this.store.length; i++) {
                this.store[i].ammunition = this.store[i].maxammo
            }
            this.ammorepresented = this.ammorepresented - y
            console.log("All the Aircrafts are fill complate!")
        } else { //make sort,then fill it one by one.
            this.store.sort((a, b) => {
                if (a.priority < b.priority) { return -1 } else if (a.priority > b.priorit) { return 1 } else { return 0 }
            })

            for (let i = 0; i < this.store.length; i++) {
                if (this.ammorepresented >= this.store[i].maxammo - this.store[i].ammunition) {
                    this.ammorepresented = this.ammorepresented + this.store[i].ammunition - this.store[i].maxammo;
                    this.store[i].ammunition = this.store[i].maxammo
                    console.log("The " + this.store[i].type + " is fill ammo already!")
                } else {
                    this.store[i].ammunition = this.ammorepresented
                    console.log("The ammunition is empty!")
                    break
                }

            }

        }
    }
    fight(Carrier) {
        //get damage;
        let tdamage = 0;
        for (let i = 0; i < this.store.length; i++) {
            tdamage = tdamage + this.store[i].fight()
        }
        //give damage;
        Carrier.health = Carrier.health - tdamage
        console.log("Already taken " + tdamage + " damage for target!")
    }
    getStatus() {
        let tdamage = 0;
        for (let i = 0; i < this.store.length; i++) {
            tdamage += this.store[i].ammunition * this.store[i].basedamage
        }
        console.log("HP: " + this.health + ", Aircraft count: " + this.store.length + ", Ammo Storage: " + this.ammorepresented +
            ", Total damage: " + tdamage)
        for (let i = 0; i < this.store.length; i++) {
            console.log("Type " + this.store[i].type + " ,Ammo: " + this.store[i].ammunition + " ,Base Damage: " + this.store[i].basedamage +
                " ,All Damage: " + this.store[i].ammunition * this.store[i].basedamage)
        }
        if (this.health <= 0) {
            console.log("It's dead Jim :(")
        }
    }
}

let b = new Carrier
b.add(f16)
b.add(f35)
b.add(f16)
b.add(f35)
b.add(f16)
let c = new Carrier

console.log(b.store)
b.fill()
b.getStatus()
b.fight(c)
c.getStatus()