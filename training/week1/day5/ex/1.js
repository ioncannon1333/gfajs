class Person {
    constructor(name, age, gender) {
        this.name = name === undefined ? "Jane Doe" : name
        this.age = age === undefined ? 30 : age
        this.gender = gender === undefined ? 'female' : gender
    }
    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender)
    }
    getGoal() {
        console.log('My goal is:Live for the moment!')
    }
}


class Student extends Person {
    constructor(name, age, gender, previousOrganization, skippedDays) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization === undefined ? "The School of Life" : previousOrganization;
        this.skippedDays = skippedDays === undefined ? 0 : skippedDays;
    }
    getGoal() {
        console.log('My goal is:My goal is: Be a junior software developer.')
    }
    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender +
            " from " + this.previousOrganization +
            " who skipped " + this.skippedDays + " days from the course already.")
    }
    skipDays(numberofDays) {
        this.skippedDays = this.skippedDays + numberofDays;
    }
}


class Mentor extends Person {
    constructor(name, age, gender, level) {
        super(name, age, gender)
        this.level = level === undefined ? 'intermediate' : level
    }
    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.')
    }
    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender + this.level + " mentor.")
    }
}


class Sponsor extends Person {
    constructor(name, age, gender, company, hiredStudents) {
        super(name, age, gender)
        this.company = company === undefined ? 'Google' : company
        this.hiredStudents = hiredStudents === undefined ? 0 : hiredStudents
    }
    hire() {
        this.hiredStudents++
    }
    getGoal() {
        console.log('My goal is: Hire brilliant junior software developers.')
    }
    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender +
            " who represents " + this.company +
            " and hired " + this.hiredStudents + " students so far.")
    }
}


class Cohort {
    constructor(name) {
        this.name = name
        this.students = []
        this.mentors = []
    }
    addStudent(Student) {
        this.students.push(Student)
    }
    addMentor(Mentor) {
        this.mentors.push(Mentor)
    }
    info() {
        console.log("The " + this.name + " cohort has " + this.students.length + " students and " + this.mentors.length + " mentors.")
    }
}


//test input:

const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

people.forEach((person) => {
    person.introduce();
    person.getGoal();
})

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();