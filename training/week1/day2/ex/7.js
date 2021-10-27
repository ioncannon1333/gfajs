'use strict';

const lineCount = 8;
let w;
let s = '';
let v = ' ';
let t;

function pyramid(x, s) {
    for (w = 1; w <= lineCount; w++) {

        console.log(v.repeat(lineCount - w) + s.repeat(w * 2 - 1))
    }
}
pyramid(lineCount, '*')