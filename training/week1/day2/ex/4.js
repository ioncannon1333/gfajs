'use strict';

const number = 15;

function a(x, y) {
    //x=times,y=number
    let t = 1;
    while (t <= x) {
        console.log(t + '*' + y + '=' + t * y)
        t++
    }
}

a(10, number)