//constructor can create a new instance of the class
class Person {
    constructor(name, lastName) {
        this.name = name,//this will refer at the instance created
        this.lastName = lastName,
        this.showName = ()=>{
            return `${this.name} ${this.lastName}`;
        }
    }
}

//Instance 1
const person1 = new Person('Pedro','Pérez');
//instance 2
const person2 = new Person('Chanchito','Happy');

console.log(person1);
console.log(person2.showName());