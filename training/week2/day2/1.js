/*******************************************************
Stack:First in last out; Queue: First in First out

linkedlist:set a node class , class have lastnode,this.value,nextnode &&if last&next have/nt 

Implement the Stack, Queue interfaces using arrays
Implement the LinkedList interface using your own Node class
Implement the Stack interface using your previous Node class
Implement the Queue interface using 2 previous Stack implementations
Create a BinaryTree implementation for the Tree interface
Create a BinarySearchTree implementation for the Tree interface

*******************************************************/




class Stack1 {
    stack = [];
    constructor() {}
    makestack(x) {
        for (i = 0; i < x; i++) {
            this.stack.push();
        }
    }
    add(x) {
        for (i = 0; i < x; i++) {
            if (this.stack[i] === undefined) {
                this.stack[i] = x;
                break;
            }
        }
    }
    get() {
        for (i = this.stack.length; i > 0; i--) {
            if (this.stack[i] !== undefined) {
                return this.stack[i]
            }
            if (this.stack[i] === undefined && i === 0) {
                console.log("This stack is empty")
            }
        }
    }
}

class Queue1 {
    queue = [];
    makequeue(x) {
        for (i = 0; i < x; i++) {
            this.queue.push();
        }
    }
    add(x) {
        for (i = 0; i < x; i++) {
            if (this.queue[i] === undefined) {
                this.queue[i] = x;
                break;
            }
        }
    }
    get() {
        let qnum;
        for (i = 0; i < this.queue.length; i++) {
            if (this.queue[i] !== undefined) {
                qnum = this.queue[i]
            }
            if (this.queue[i] === undefined && i === 0) {
                console.log("This queue is empty")
            }
        }
        //replace
        for (i = 0; i < this.queue.length; i++) {
            this.queue[i] = this.queue[i + 1]
                //    i      i+1     i+2
                //   [a]     [b]     [c]
        }
    }
}

//NodeList= Node(data,pointer) + List(mainNode,function).

class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class List {
    constructor() {
        this.head = null;
    }
    createNode(data) {
        return new createNode(data);
    }
    add(node) {
        if (this.head === null) {
            node.next = null;
        } else {
            node.next = this.head;
        }
        this.head = node;
    }
    find(data) {
        let node = this.head;
        while (node !== null && node.data !== data) {
            node = node.next
        }
        return node;
    }
    remove(node) { //remove the head node
        if (node === this.head) {
            this.head = node.next;
            return;
        }
        let prevNode = this.head;
        while (prevNode !== node) {
            prevNode = prevNode.next;
        }
        if (node.next === null) {
            prevNode = null;
        }
        if (node.next) {
            prevNode.next = node.next
        }

    }
}