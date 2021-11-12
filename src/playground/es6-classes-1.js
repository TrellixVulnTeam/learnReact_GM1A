//method 1 
class Person {
    constructor(name = 'No name', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi, ' + this.name + '!';
        return `Hi, ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` His Major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, traveller) {
        super(name, age);
        this.traveller = traveller;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (!!this.traveller) {
            greeting += ` Have you come from ${this.traveller}?`;
        }
        return greeting;
    }
}

const me = new Traveller('Aleks Fylymonchuk', 26, 'Kyiv');
const other = new Traveller();
console.log(me.getGreeting());
console.log(other.getGreeting());


