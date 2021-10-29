'use strict';

const Domino = require('./domino');

function initializeDominoes() {
    const dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//console.log(dominoes[0].values[1])

function orderdominoes(dominolst) {
    let dominoes = [];
    for (let i = 0; i < dominolst.length; i++) {
        //console.log(dominolst[i] + 'a')
        for (let y = 0; y < dominolst.length; y++) {
            if (i === 0 || dominolst[i].toString().charAt(2) === dominolst[y].toString().charAt(0)) {
                dominoes.push(dominolst[y])
                console.log(dominoes.toString())
                break
            }
        }
        console.log(dominoes.toString())
    }

}

console.log(dominoes.toString());

orderdominoes(dominoes)