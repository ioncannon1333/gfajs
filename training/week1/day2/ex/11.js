function table(x) {
    function a() {
        console.log('% % % % ')
    }

    function b() {
        console.log(' % % % %')
    }
    let wight = x;
    let i;
    for (i = 0; i < x; i++) {
        if (i % 2 == 0) {
            a();
        } else { b() }
    }

}

table(12)