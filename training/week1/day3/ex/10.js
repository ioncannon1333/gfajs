let marketdb = {
    'eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

function less(x, y) {
    let key1 = Object.keys(x);
    let value1 = Object.values(x);
    let tmpkey = 0;
    for (let i = 0; i < value1.length; i++) {
        if (value1[i] < y) {
            tmpkey = key1[i];
            console.log('The product which cost less than ' + y + ' is ' + tmpkey)
        }
    }
    return tmpkey
}
less(marketdb, 201)

function more(x, y) {
    let key1 = Object.keys(x);
    let value1 = Object.values(x);
    let tmpkey = 0;
    for (let i = 0; i < value1.length; i++) {
        if (value1[i] > y) {
            tmpkey = key1[i];
            console.log('The ' + tmpkey + ' is cost more than ' + y + ', its cost ' + x[tmpkey])
        }
    }
    return tmpkey
}
more(marketdb, 150)