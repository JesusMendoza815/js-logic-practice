const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const fondo = document.querySelector("body");

color.addEventListener("input", () => {
    const valor = color.value;
    salida.innerHTML = valor;
    fondo.style.backgroundColor = valor;
    color.style.backgroundColor = valor;
})