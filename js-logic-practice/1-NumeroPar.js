const calcularNPar = (n) => {
    (n % 2 === 0)
    ? console.log(`${n} es PAR`)
    : console.log(`${n} NO es PAR`)
}

calcularNPar(Math.round(Math.random() * 100));