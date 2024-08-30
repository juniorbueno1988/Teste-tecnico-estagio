const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countLetterA(str) {
    const matches = str.match(/a/gi);
    return matches ? matches.length : 0;
}

rl.question("Informe uma string: ", (inputString) => {
    const count = countLetterA(inputString);
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
    rl.close();
});
