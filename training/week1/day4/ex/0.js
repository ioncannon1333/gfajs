/*let tree1 = {
    'type': '',
    'leaf_color': '',
    'age': '',
    'sex': ''
}

let tree2 = {
    'type': '',
    'leaf_color': '',
    'age': '',
    'sex': ''
}

let tree3 = {
    'type': '',
    'leaf_color': '',
    'age': '',
    'sex': ''
}

let tree4 = {
    'type': '',
    'leaf_color': '',
    'age': '',
    'sex': ''
}

let tree5 = {
    'type': '',
    'leaf_color': '',
    'age': '',
    'sex': ''
}
*/

class tree {
    constructor(a, b, x, y) {
        this.type = a
        this.leaf_color = b
        this.age = x
        this.sex = y
    }
    ready() {
        console.log(this.type, 'this tree is ready');
        return
    }


}

let tree2 = new tree(1, 2, 3, 4)
let tree3 = new tree('a', 'b', 'c', 'd')

console.log(tree2)
tree3.ready()