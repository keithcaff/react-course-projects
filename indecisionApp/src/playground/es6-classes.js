class Person {
    
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi I am ' + this.name + '!' ;
        return `Hi I am ${this.name}. `;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old. `
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;    
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        // return `${super.getDescription()} major:${this.major ? this.major : 'N/A'}`
        let desc = super.getDescription();
        if (this.hasMajor) {
            desc += `Their major is ${this.major}`
        } 
        return desc;
    }
}


class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += `I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

// const me = new Person('Keith Caffrey', 29);
// console.log(me.getGreeting());
// console.log();

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());


// const student1 = new Student('Keith Caffrey', 29, 'Bsc Information Systems');
// console.log(student1.getDescription());
// console.log(student1.hasMajor());

// const student2 = new Student();
// console.log(student2.getDescription());
// console.log(student2.hasMajor());


const traveller1 = new Traveller('Keith Caffrey', 29, 'Dublin, Ireland');
console.log(traveller1.getGreeting());

const traveller2 = new Traveller('Frank Grimes', 26);
console.log(traveller2.getGreeting());



