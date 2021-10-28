'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";

let txt1 = 'My todo:\n'
let txt2 = ' - Download games\n';
let txt3 = '   - Diablo';
let y = ''

function exchange(x) {
    y = y.concat(txt1, x, txt2, txt3);
    return y
}

todoText = exchange(todoText)


console.log(todoText);