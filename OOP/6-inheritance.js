/*
INHERITANCE (createaspecialized object starting fromageneral)
*/

class Person {
    constructor(name, lastName) {
        this.name = name,
        this.lastName = lastName,
        this.propertys = 'Inheritances directly'
    }
}

const user1 = new Person('María','López');
console.log(user1);

class Programmer extends Person {
    constructor(languaje, name, lastName) {
        super(name, lastName);
        this.languaje = languaje
    }
}

const programmer = new Programmer('Javascript','Pedro','Orozco');
console.log(programmer);