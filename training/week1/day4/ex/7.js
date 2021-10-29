'use strict';
const Thing = require('./thing');
const Fleet = require('./fleet');

const fleet = new Fleet();


// -  Create the `FleetOfThings` class with a `main` method

// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well

class FleetOfThings {
    constructor() {
        this.fleets = [];
    }
}

function addnewthings(name, chk) {
    let tmpthing = new Thing(name)
    fleet.add(tmpthing)
    if (chk === 't') {
        fleet.things[Object.keys(fleet.things).length - 1].complete()
    }
}



addnewthings('Get milk', 'f')
addnewthings('Remove the obstacles', 'f')
addnewthings('Stand up', 't')
addnewthings('Eat lunch', 't')


function printthething(x) {
    for (let i = 0; i < Object.keys(x.things).length; i++) {
        let y = ' '
        if (x.things[i]['completed'] === true) {
            y = 'x'
        }
        console.log(i + 1 + '. [' + y + '] ' + x.things[i]['name'])
    }
}

printthething(fleet)