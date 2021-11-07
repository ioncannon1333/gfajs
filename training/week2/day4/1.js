/*
every squre as a cell,each cell has number or mines.
and hidden or showed.

if its mines,set it near cells number+1.
if cells not nears for mines,set it to 0;
if its 0;search for nearby cells until the number.



先生成棋盘，选择第一个点后生成地雷，最后生成数字。
横向=x 纵向=y

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
        if (location) {

        }
    }
    check_nearby(nodes) {
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
            this.spawn_mine(this.mines)
        } else {
            nodes.check(nodes)
        }
    }
}