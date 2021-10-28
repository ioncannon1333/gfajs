function dealyprints(x, y) {
    prints = () => {
        console.log(y)
    }
    setTimeout(prints, x)

}

dealyprints(3000, 'apple')