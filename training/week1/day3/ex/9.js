let marketdb = {
    'eggs': '200',
    'Milk': '200',
    'Fish': '400',
    'Apples': '150',
    'Bread': '50',
    'Chicken': '550'
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