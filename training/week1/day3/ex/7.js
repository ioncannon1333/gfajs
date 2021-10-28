map1 = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
}
console.log(map1)

function printmap(x) {
    let objkey = Object.keys(x);
    for (let i = 0; i < objkey.length; i++) {
        console.log(x[objkey[i]] + ' (ISBN: ' + objkey[i] + ')')
    }
}
printmap(map1)

delete map1['978-1-60309-444-3']
console.log(map1)

function removemapvalue(x, y) {
    let valuesobj = Object.values(x)
    for (let i = 0; i < valuesobj.length; i++) {
        if (valuesobj[i] === y) {
            delete x[Object.keys(x)[i]]
        }
    }

}
removemapvalue(map1, 'The Lab')
console.log(map1)

map1['978-1-60309-450-4'] = 'They Called Us Enemy';
map1['978-1-60309-453-5'] = 'Why Did We Trust Him?';
console.log(map1)

function checkkeys(x, y) {
    if (x[y] === undefined) {
        console.log("There haven't a value with the key:" + y)
    } else {
        console.log('the key of ' + y + 'value is:' + x[y])
    }
}
checkkeys(map1, '478-0-61159-424-8')

console.log(map1['978-1-60309-453-5'])