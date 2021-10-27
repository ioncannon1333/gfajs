let animals = ['dog', 'cat', 'kitten']

function appends(x) {
    x = x + 's'
    return x
}

console.log(animals.map(appends))