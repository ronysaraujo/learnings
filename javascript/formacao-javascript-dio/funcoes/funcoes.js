/*function teste() {
    console.log('teste');
}

teste();*/

function writeMyName(nome) {
    return 'Meu nome é ' + nome;
}

function isMaiorIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
    //return idade >=18;
}

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));

function main() {
    //console.log(writeMyName('Rony Araujo'));
    console.log(isMaiorIdade(25));
}


main();

