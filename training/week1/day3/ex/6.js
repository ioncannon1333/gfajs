let map1 = {};
console.log(map1)

map1 = {
    97: 'a',
    98: 'b',
    99: 'c',
    65: 'A',
    66: 'B',
    67: 'C'
}

console.log(Object.keys(map1))
console.log(Object.values(map1))

map1[68] = 'D';

console.log(Object.keys(map1).length)

console.log(map1[99])

delete map1[97]

if ((map1[100]) === undefined) {
    console.log("haven't")
} else { console.log("have") }


function removemap(x) {
    let a = Object.keys(x);
    console.log(a)
    for (let b = 0; b < a.length; b++) {
        delete x[a[b]]
        console.log(x)
    }
}

removemap(map1)

console.log(Object.keys(map1))