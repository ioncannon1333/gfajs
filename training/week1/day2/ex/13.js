'use strict';

let al = 'EPAM';

function greet(x) {
    if ((x === '') || (x === undefined)) {
        console.log('please given a name')
    } else {
        console.log('greetings,dear ' + x)
    }
}

greet()