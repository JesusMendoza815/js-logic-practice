/*
Utilizando un bucle,mostrar la suma y la media de
los números introducidos hasta introducir un
numero negativo y ahí mostrar el resultado.
*/

const arr = [1,2,3,-1,4,5];
const newArr = [];

//Forma 1
let res = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= -1) {
        break;
    } else {
        newArr.push(arr[i]);
        res += arr[i];
        console.log(res);
    }
    
}
console.log(`Suma total: ${res}... Media: ${res/newArr.length}`);
