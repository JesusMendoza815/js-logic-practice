const palindromo = (cadena) => {
    // (cadena.toLowerCase() === cadena.split('').reverse().join('').toLowerCase())
    // ? console.log("Sí se palíndromo")
    // : console.log("Nop, no es un palindromo")
    (cadena.toLowerCase() === cadena.split("").reverse().join("").toLowerCase())
    ? console.log(`Yei, "${cadena}" sí es un palindromo`)  
    : console.log(`Ups!!, "${cadena}" NO es un palindromo`);
}
palindromo("carro")