let telebook = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
}


function checkvalues(x, y) { //x=obj,y=value
    let valuesobj = Object.values(x) //get value list
    let keysobj = Object.keys(x) //get key list
    for (let i = 0; i < valuesobj.length; i++) {
        if (valuesobj[i] === y) { //search the value
            console.log('the number "' + y + '" is from: ' + keysobj[i])
            break;
        }
        if (valuesobj[i] !== y && i === valuesobj.length - 1) { //haven't the value
            console.log('there havent this phone mumber: ' + y)
        }
    }
}

console.log(telebook['John K. Miller'])

checkvalues(telebook, '307-687-2982')

function checkname(x, y) {
    if (x[y] === undefined) {
        console.log("There haven't a phone number with :" + y)
    } else {
        console.log('the phone num of ' + y + ' is:' + x[y])
    }
}

checkname(telebook, 'Chris E. Myers')
checkname(telebook, 'Hortensia E. Foster')