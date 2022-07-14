//SUBTYPE_POLYMORPHISM
//Allow object with different types but with an inheritance relationship
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
class Programmer extends Person {
    constructor(languaje ,name, lastName) {
        super(name, lastName);
        this.languaje = languaje;
    }
}

const person = new Person('Ryan','Casas');
const programmer = new Programmer('Javascript','Pedro','Oziz');

//SUBTYPE_POLYMORPHISM is basicly...
function writeAllName(p) {
    console.log(`${p.name} ${p.lastName}`);
}

writeAllName(person);
writeAllName(programmer);





