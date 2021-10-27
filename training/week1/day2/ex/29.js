let matrix = []
let w = 0;
let n = 0;


function makematrix(x) {
    //make matrix
    let arr = x;
    for (w = 0; w < x; w++) {
        matrix.push([])
            //width
        for (n = 0; n < x; n++) {
            if (n == arr - 1) {
                matrix[w].push(['1'])
                arr--
            } else {
                matrix[w].push(['0'])
            }
        }
    }
    //show in console
    let y = 0;
    for (y = 0; y < x; y++) {
        console.log(matrix[y].toString())
    }
}

makematrix(8)