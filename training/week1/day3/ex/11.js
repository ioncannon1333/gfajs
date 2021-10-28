let marketdb = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
}

let boblist = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}

let alicelist = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10,
}

paymentsum = (x, y) => { //x is price list; y is amount list
    let keyy = Object.keys(y);
    let valuey = Object.values(y);
    let tmp = 0;
    for (let i = 0; i < keyy.length; i++) {
        tmp = x[keyy[i]] * valuey[i] + tmp
    }
    console.log("this list is pay " + tmp)
    return (tmp)
}
paymentsum(marketdb, boblist)
paymentsum(marketdb, alicelist)

comparelst = (x, y, z) => { //lst a, lst b, compare target
    if (x.hasOwnProperty(z) === false && y.hasOwnProperty(z) === true) {
        console.log('x list < y list at ' + z)
    } else if (x.hasOwnProperty(z) === true && y.hasOwnProperty(z) === false) {
        console.log('x list > y list at ' + z)
    } else if (x[z] > y[z]) {
        console.log('x list > y list at ' + z)
    } else if (x[z] < y[z]) {
        console.log('x list < y list at ' + z)
    } else { console.log('x list = y list at ' + z) }
}
comparelst(boblist, alicelist, 'Rice')
comparelst(boblist, alicelist, 'Potato')

calprodnum = (x, y) => {
    let valx = Object.values(x);
    let valy = Object.values(y);
    if (valx.length > valy.length) {
        console.log('x buy more different products')
    } else if (valx.length < valy.length) {
        console.log('y buy more different products')
    } else {
        console.log('x is buy same products as y')
    }
}
calprodnum(boblist, alicelist)

calamount = (x, y) => {
    let valx = Object.values(x);
    let valy = Object.values(y);
    sum = (a, b) => { return a + b }
    if (valx.reduce(sum) > valy.reduce(sum)) {
        console.log('x is buy more piece')
    } else if (valx.reduce(sum) < valy.reduce(sum)) {
        console.log('y is buy more piece')
    } else {
        console.log('x is buy same piece as y')
    }

}

calamount(boblist, alicelist)