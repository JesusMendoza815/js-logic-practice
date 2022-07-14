//ASSOCIATION (relation)
class Person {
        constructor(name, lastName) {
            this.name = name;
            this.lastName = lastName;
        }
}


const user1 = new Person('María','López');
const user2 = new Person('Pedro','López');
//relation
user1.dad = user2;
// console.log(user1);


//AGREGATION
const company =  {
    name: 'Mendoza Inc.',
    employees: []
}
company.employees.push(user1, user2);

console.log(company);
