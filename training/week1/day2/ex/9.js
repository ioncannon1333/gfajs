'use strict';

const lineCount = 9;


function square(x) {
    let w = x;
    let c = '%';
    let b = ' '
    let t;

    for (t = 1; t <= x; t++) {
        if ((t == 1) || (t == x)) {
            console.log(c.repeat(w))
        } else {
            console.log(c + b.repeat(w - 2) + c)
        }
    }
}

square(lineCount)