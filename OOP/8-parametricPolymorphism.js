/*PARAMETRIC POLYMORPHISM*/

/*
Methos that works with parameters of any type, also called generics
*/
class Stack {
    constructor() {
        this.items = [];

        this.pushItem = function (item) {
            this.items.push(item);
        }
    }
}

const stack1 = new Stack();
const stack2 = new Stack();

stack1.pushItem('Dato stack 1');
stack2.pushItem('Dato stack 2');

console.log(stack1);
console.log(stack2);