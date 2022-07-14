class Person {
    constructor(name, lastName) {
        this.name = name,
        this.lastName = lastName
    }
    //We can add methods directly in the class
    sayHi () { 
        return `${this.name} ${this.lastName}`
    }
}

const person1 = new Person('Pedro','Sánchez');


console.log(person1.sayHi());