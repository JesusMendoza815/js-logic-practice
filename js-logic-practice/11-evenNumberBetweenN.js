/*
#5.- Numeros pares enntre dos numero
https://www.youtube.com/watch?v=PescFjv1UXM
*/

function evens(n1,n2) {
    if (n1 > n2 || (n1 && n2) < 1) {
        console.log(`El primer parámetro debe ser menor que el segundo`);
        console.log('Los numeros deben ser positivos y mayores a 0');
    } else {
        for (let i = n1; i <= n2; i++) {
            (i % 2 == 0)
            ? console.log('Even: ' + i)
            : console.log('😔 Not even ' + i);
        }
    }
}

evens(0,20)