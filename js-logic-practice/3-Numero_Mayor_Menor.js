//Programa que nos diga si dos numeros son iguales o cual es mayor y cual es menor

const number = (a, b) => {
    if (typeof (a+b) === 'number'){
        (a === b)
        ? console.log(`"${a}" y "${b}" son iguales`)
        : console.log(`Menor: "${Math.min(a,b)}" y Mayor: "${Math.max(a,b)}"`)
    }
    else console.warn("VALORES INVALIDOS");
    
}

number(0.8,0.888)
