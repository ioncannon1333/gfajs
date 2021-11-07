/*
every squre as a cell,each cell has number or mines.
and hidden or showed.

if its mines,set it near cells number+1.
default cells which not near mines is number=0
if its 0;search for nearby cells until all nearby number is showed.


first to get a new table,
the mines are spawn when first select
the first select must be a 0-9 number
table format as the[x[y]] type
    y1 y2 y3 y4
x1  x  x  x  x
x2  x  x  x  x
x3  x  x  x  x
x4  x  x  x  x
*/

class nodes {
    constructor(status, mine, number, location) {
        this.status = status === undefined ? 0 : status //0=close 1=opened
        this.mine = status === undefined ? false : mine //is this mine
        this.number = number === undefined ? 0 : number //0-9
        this.location = location // [a,b] -> [x[y]]
    }
    add_value(location) {
        if (location[0] === undefined || location[0] < 0 || location[1] === undefined || location[1] < 0) { // <0 or >a|b.max
            return
        } else {
            this.number++
        }
    }
    add_nearby_value(nodes) {
        let a = nodes.location[0]
        let b = nodes.location[1]
        let nearlst = [
            //xxx
            //xox
            //xxx
            [a - 1, b - 1],
            [a - 1, b],
            [a - 1, b + 1],

            [a, b - 1],
            [a, b + 1],

            [a + 1, b + -1],
            [a + 1, b],
            [a + 1, b + 1]
        ]
        for (let i = 0; i < 8; i++) {
            nodes.add_value(nearlst[i])
        }
    }
    check(location) { //mines/number, if number:check nearby number->if nearby num = 0:check nearby nodes'num; if mines:boom;
        this.status = 1; //set status to opened first
        if (this.number === 0) { //check num, if 0 check nearby close status num.
            this.check_nearby(location)
        }
        if (this.number > 0) {
            return;
        }
    }
    check_nearby(location) {
        let a = location[0]
        let b = location[1]
        let nearlst = [
            //xxx
            //xox
            //xxx
            [a - 1, b - 1],
            [a - 1, b],
            [a - 1, b + 1],

            [a, b - 1],
            [a, b + 1],

            [a + 1, b + -1],
            [a + 1, b],
            [a + 1, b + 1]
        ]
        for (let i = 0; i < 8; i++) {
            this.check(nearlst[i])
        }
    }

}

class table {
    constructor() {
        this.size = 0;
        this.mines = 0;
        this.spawned = false;
        this.table = [];
    }
    spawn_mine(num) {
        //random,

        if (nodes.mine == true) {
            nodes.add_nearby_value(nodes)
        }
    }
    spawn(size, mines) { //size,mines.
        this.size = size;
        this.mines = mines;

        for (let i = 0; i < size; i++) { //spawn grid
            for (let j = 0; j < size; j++) {
                table[i].push
            }
        }
    }
    select(nodes) { //1st time spawn and check, after only check.
        if (this.spawned === false) {
            this.spawned = true;
            this.spawn_mine(this.mines)
        } else {
            nodes.check(nodes.location)
        }
    }
}