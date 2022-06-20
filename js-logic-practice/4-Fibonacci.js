const fibonacci = (n) => {//n representa numero de posiciones (.length)
    console.log("FIBO 1")
    const num = [0, 1];
    for (let i = 2; i <= n; i++) {
        num[i] = num[i - 2] + num[i - 1];//resultado = numero anterior + numero actual 
        console.log(num[i]);//n reresenta la ultima posicion
    }
}
//Modo cool y funcional a nivel técnico 
const fibonacci2 = (n) => {
    let a = 0,
        b = 1,
        c;
    console.log("FIBO 2")
    for (let i = 1; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
fibonacci(10);
fibonacci2(10);