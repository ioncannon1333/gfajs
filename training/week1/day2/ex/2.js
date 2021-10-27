'use strict';

// Create a program that writes this line 100 times:
// 'I like trains!'
function a(x) {
    if (x > 0) {
        console.log('I like trains!' + '(remain' + x + ')')
        x--
        a(x)
    }
}
a(100)