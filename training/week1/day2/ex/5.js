'use strict';
let m3 = 'Fizz'
let m5 = 'Buzz'
let t

function a(x, y) {
    for (t = x; t < y; t++) {
        if (t % 3 == 0 & t % 5 == 0) {
            console.log(m3 + m5);
        } else if (t % 3 == 0) {
            console.log(m3);
        } else if (t % 5 == 0) {
            console.log(m5);
        } else {
            console.log(t);
        }
    }
}



a(1, 100)