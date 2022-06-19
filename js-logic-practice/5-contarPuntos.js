const contador = () => {
    let cadena = "..Hola..mundo.."
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ".") {
            contador++;
        }
    }
    console.log(contador)
}

contador()