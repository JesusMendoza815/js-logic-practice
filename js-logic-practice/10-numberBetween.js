/*Hacer un programa que muestre todos los
números entre dos números introducidos por el
usuario.*/

function nBetween(n1,n2) {
    console.log(`Initial number: ${n1}`);
    for (let i = n1+1; i < n2; i++) {
        console.log(i);
    }
    console.log(`Final number: ${n2}`);
}

nBetween(2,10);
// const n1 = 2,n2 = 10;
// for (let i = n1; i <= n2; i++) {
//     console.log(i);
// }