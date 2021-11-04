let arr = [15, 3, 13, 2, 4, 9, 1, 7, 6, 8, 10, 11, 12, 14, 5, 21];
console.log(arr);



function sort(x) {
    let j = x.length
    let y;
    while (j > 0) {
        for (let i = 0; i < j - 1; i++) {
            if (x[i] > x[i + 1]) {
                this.tmpdata = x[i];
                x[i] = x[i + 1];
                x[i + 1] = this.tmpdata;
            }
        }
        j--
    }
    return x
}


//let arrSorted = sort(arr)

function merge(x, y) {
    let tmp = []
    while (x.length > 0 && y.length > 0) {
        if (x[0] < y[0]) {
            tmp.push(x.shift())
        } else {
            tmp.push(y.shift());
        }
    }
    return tmp.concat(x).concat(y)
}



function msort(items) {
    if (items.length == 1) {
        return items;
    }
    let middle = Math.floor(items.length / 2)
    let left = items.slice(0, middle)
    let right = items.slice(middle);
    return merge(msort(left), msort(right))
}


console.log(msort(arr))