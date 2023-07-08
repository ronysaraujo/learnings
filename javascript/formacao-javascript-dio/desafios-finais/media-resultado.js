// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"


const {gets, print, geraEntradas} = require('./funcoes-auxiliares');


entradas = geraEntradas([8, 2, 6]);

function classificacaoFinal(media) {
    if (media < 5) {
        print('Reprovado');
    } else if (media >=5 && media < 7) {
        print('Recuperação');
    } else {
        print('Aprovado');
    }
}

//const notasAlunos = gets();

for (let i = 0; i < entradas.length; i++) {
    const media = gets();
    print(media);
    classificacaoFinal(media);
}

