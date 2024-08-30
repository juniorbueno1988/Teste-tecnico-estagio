const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    let a = 0, b = 1, c = a + b;
    if (num === a || num === b) return true;
    
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

rl.question("Informe um número: ", (number) => {
    number = parseInt(number);
    if (isFibonacci(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
    rl.close();
});
