/*
POLYMORPHISM (Reduce coupling in our aplication)
*/

//Overloading 
function counter(x) {
    return x.toString().length;
}

console.log(counter(1234567));
console.log(counter('Hello'));

function sum(x = 0,y = 0,z = 0) {
    return x + y + z;
}

console.log(sum(10, 5));
console.log(sum(10, 5, 10));
