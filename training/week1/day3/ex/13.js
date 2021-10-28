function dealyprints(x, y) {
    prints = () => {
        console.log(y)
    }
    setTimeout(prints, x)
}

console.log('apple')
dealyprints(1000, 'pear')
dealyprints(3000, 'melon')
dealyprints(5000, 'grapes')