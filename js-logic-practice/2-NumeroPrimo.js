const calNumeroPrimo = (n) => {
    let primo = true;
    for (let i = 2; i < n; i++) {
        if ((n % i) === 0) {
            primo = false;
        }
    }
    (primo) 
    ? console.log("No es primo")
    : console.log("Si es primo")
}

// calNumeroPrimo(2)
calNumeroPrimo(3)
calNumeroPrimo(4)
calNumeroPrimo(5)
calNumeroPrimo(6)