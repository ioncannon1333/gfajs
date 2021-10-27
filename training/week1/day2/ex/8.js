'use strict';

const lineCount = 15;

let w;
let v = " "
let s = '*'
let t;

function diamond(x) {
    {
        if (lineCount % 2 != 1) {
            console.log('not a even num')
        } else {
            for (w = 0; w < lineCount / 2; w++) {
                console.log(v.repeat(lineCount - w) + s.repeat(w * 2 + 1))
            }
            for (t = w; t < lineCount; t++) {
                w--
                console.log(v.repeat(lineCount - w + 1) + s.repeat(w * 2 - 1))
            }
        }
    }
}


diamond(lineCount)