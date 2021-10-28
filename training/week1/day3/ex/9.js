let marketdb = {
    'eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

function price(x) {
    console.log('The price of ' + x + ' is ' + marketdb[x])
}
price('Fish')

function expensive(x) {
    let key1 = Object.keys(x);
    let value1 = Object.values(x);
    let tmpvalue = 0;
    let tmpkey = 0;
    for (let i = 0; i < value1.length; i++) {
        if (value1[i] > tmpvalue) {
            tmpvalue = value1[i];
            tmpkey = key1[i];
        }
    }
    console.log('The most expensive product is ' + tmpkey)
    return tmpkey
}
expensive(marketdb)

function avprice(x) {
    let value1 = Object.values(x);
    getsum = (x, y) => { return x + y }
    let v = value1.reduce(getsum) / value1.length
    console.log('the average price of market is ' + parseInt(v))
    return v
}
avprice(marketdb)

function howmanybelow(x, y) {
    let value1 = Object.values(x);
    let tmpc = 0;
    for (let i = 0; i < value1.length; i++) {
        if (value1[i] < y) {
            tmpc++;
        }
    }
    console.log('There are ' + tmpc + ' products price below ' + y)

}
howmanybelow(marketdb, 300)

function exactly(x, y) {
    let key1 = Object.keys(x);
    let value1 = Object.values(x);
    let tmp = 0;
    for (let i = 0; i < value1.length; i++) {
        if (value1[i] === y) {
            console.log('We can buy ' + key1[i] + ' for exactly ' + y)
            tmp++
        }
        if (value1[i] !== y && i === value1.length - 1 && tmp === 0) {
            console.log('There is not any thing we can buy for exactly ' + y)
        }
    }

}
exactly(marketdb, 125)

function cheapest(x) {
    let key1 = Object.keys(x);
    let value1 = Object.values(x);
    let tmpvalue = value1[0];
    let tmpkey = 0;
    for (let i = 0; i < value1.length; i++) {
        if (value1[i] < tmpvalue) {
            tmpvalue = value1[i];
            tmpkey = key1[i];
        }
    }
    console.log('The most cheapest product is ' + tmpkey)
    return tmpkey
}
cheapest(marketdb)