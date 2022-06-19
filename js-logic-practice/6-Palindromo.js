const palindromo = (cadena) => {
    // (cadena.toLowerCase() === cadena.split('').reverse().join('').toLowerCase())
    // ? console.log("Sí se palíndromo")
    // : console.log("Nop, no es un palindromo")
    (cadena.toLowerCase() === cadena.split("").reverse().join("").toLowerCase())
    ? console.log(`${cadena} si es un palindromo`)
    : console.log(`${cadena} no es un palindromo`)
}
palindromo("carro")