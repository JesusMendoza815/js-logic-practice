//Un objeto es un ente que almacena valores diferenciados por llaves dentro de este
//Object sructure
const object = {
    //PROPERTIES
    //key : value
    key: 'value',
    // selfKeyValue, //if the key and value are same then we can write just the name of the propert
    //methods
    method: function () {}
}

//Basic object (may contains arrays and objects)
const user = {
    //propertys
    //key : value
    name: 'user',
    lastName: 'TheUser',
    age: 36,
    hobbies: ['Games','Soccer','Watch Tv'],
    adress: {
        street: 'some street',
        city: 'some city'
    },
    method(){ return 'name'; }
}

//This
const user2 = {
    //propertys
    //key : value
    name: 'Juan',
    lastName: 'Pérez',
    age: 22,
    hobbies: ['Games','Soccer','Watch Tv'],
    adress: {
        street: 'some street',
        city: 'some city'
    },
    //this refers to the current key-value on the object
    method(){
        return `${this.name} ${this.lastName}`; 
    }
}

//example 2
const account={
    number: "1231235123123123123",
    amount: 100,
    deposit(quantity){
      this.amount = this.amount + quantity
    },
    withdraw(quantity){
      this.amount -= quantity
    }
}

// account.deposit(200);
// account.deposit(200);

// account.withdraw(100);
// account.withdraw(100);
// console.log(account);
