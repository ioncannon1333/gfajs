'use strict';

const lineCount = 11;


function square(x) {
    let w = x;
    let c = '%';
    let b = ' '
    let t;

    for (t = 1; t <= x; t++) {
        if ((t == 1) || (t == x)) {
            console.log(c.repeat(w))
        } else {
            console.log(c + b.repeat(t - 2) + c + b.repeat(w - t - 1) + c)
        }
    }
}

square(lineCount)