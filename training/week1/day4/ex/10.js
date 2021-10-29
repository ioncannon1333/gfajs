class student {
    constructor() {
        this.learned = 0
    }
    question(teacher) {
        teacher.teach(this)
    }
    learn() {
        this.learned = this.learned + 1
    }
}


class Teacher {
    constructor() {
        this.teached = 0
    }
    teach(student) {
        student.learn()
        this.teached = this.teached + 1
    }
    answer() {
        this.teach()
    }
}

let a = new student

let b = new Teacher


a.question(b)
console.log(a)
console.log(b)
b.teach(a)
console.log(a)
console.log(b)