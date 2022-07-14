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

//PROTOTYPE (not recommended, consumes more memory)
//With prototype we can modify the constructor adding methods or properties
//Arrow functions can´t acces  to the 'this' value of instance
Person.prototype.sayHi = function() {
    return `${this.name} ${this.lastName} from sayHi`;
}

Person.prototype.age = 18;

console.log(person1);
console.log(person2.showName());
console.log(person2.sayHi());
console.log(person2.age);