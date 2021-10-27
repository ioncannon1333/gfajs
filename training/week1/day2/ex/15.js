function sum(...x) {
    let y = 0;
    for (i = 0; i < x.length; i++) {
        y = y + x[i];
    }
    console.log(y)
}

sum(1, 2, 3, 4, 5)