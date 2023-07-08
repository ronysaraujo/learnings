/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule 
e imprima sua média e a sua classificação conforme a tabela abaixo:

Media - (nota 1 + nota 2 + nota 3) / 3

Classificação:
- Menor que 5, reprovação;
- Entre 5 e 7, recuperação;
- Acima de 7, passou de semestre;
*/

let nota1 = 3**2;
let nota2 = 6;
let nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
var classif;
if (media < 5) {
    classif = 'está reprovado.';
} else if (media >= 5 & media < 7) {
    classif = 'está em recuperação.';
} else {
    classif = 'passou de semestre.';
}

console.log('Sua média é ' + media + '. Você ' + classif);