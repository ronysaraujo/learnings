// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print, geraEntradas } = require('./funcoes-auxiliares');

geraEntradas([5, 3, 4, 1, 10, 8]);
let quantidadeNumeros = gets();
let maiorPar;
let menorImpar;

for (let i = 1; i < quantidadeNumeros; i++) {
    const numero = gets();
    let par, impar;
    if (numero%2 === 0) {
        par = numero;
        if (maiorPar==null) {
            maiorPar = par;
        } else if (numero > maiorPar) {
            maiorPar = numero;
        }
    } else {
        impar = numero;
        if (menorImpar==null) {
            menorImpar = impar;
        } else if (numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

print('Maior número par: ' + maiorPar);
print('Menor número impar: ' + menorImpar);