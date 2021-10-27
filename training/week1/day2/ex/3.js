'use strict';

// Create a program that prints all the even numbers between 0 and 500

function a(x, y) {
    for (x; x <= y; x++) {
        if (x % 2 == 0) {
            console.log(x)
        }
    }
}

a(0, 500)