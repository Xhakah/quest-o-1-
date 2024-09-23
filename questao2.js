function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    if (numero === a || numero === b) return true;

    let proximo = a + b;
    while (proximo <= numero) {
        if (proximo === numero) return true;
        a = b;
        b = proximo;
        proximo = a + b;
    }
    return false;
}

let numero = parseInt(prompt("Informe um número para verificar na sequência de Fibonacci:"));
if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
