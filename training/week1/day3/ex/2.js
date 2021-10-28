'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let msg = ""

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";


function reverse(msg) {
    let tmp = []
    for (let i = 0; i < msg.length; i++) {
        tmp.push(msg[i]);
    }
    tmp = tmp.reverse().join('');
    console.log(tmp)
    return tmp;
}


console.log(reverse(reversed));

module.exports = reverse;