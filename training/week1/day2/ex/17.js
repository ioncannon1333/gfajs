function log(...x) {
    let y = 0;
    for (y = 0; y < x.length; y++) {
        console.log(x[y])
    }
}


log('a', 'b', 'c', 1, 2, 3, 5.5)