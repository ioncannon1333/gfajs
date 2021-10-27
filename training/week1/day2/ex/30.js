'use strict';

let aj = [3, 4, 5, 6, 7]

//1
function dirrev() {
    let revaj = aj.reverse()
    console.log(revaj)
}
//2
let tmparr = [0, 0, 0, 0, 0]
let y = 0;

function rev(x) {
    for (y = 0; y < x.length; y++) {
        tmparr[x.length - 1 - y] = x[y]
    }
    console.log(tmparr)
}
rev(aj)
dirrev()