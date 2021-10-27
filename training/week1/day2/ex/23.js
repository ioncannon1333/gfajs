let s = [1, 2, 3, 8, 5, 6]


function exchange(x) {
    if (x === 8) {
        x = 4
    }

    return x
}
let c = s.map(exchange);
console.log(s.map(exchange))
console.log(s[3])
console.log(c)
console.log(c[3])