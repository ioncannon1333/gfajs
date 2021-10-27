'use strict';

const lineCount = 8;
let w;
let s = '';

function triangle(x, s) {
    for (w = 1; w <= lineCount; w++) {
        console.log(s.repeat(w))
    }
}

triangle(lineCount, '*')