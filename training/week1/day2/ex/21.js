let abc = ['Arthur', 'Boe', 'Chloe']
let y = '';

y = abc[0];
abc[0] = abc[2];
abc[2] = y;

console.log(abc);