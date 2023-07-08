/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis . Sendo elas?
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que stá no seu carro;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/


const precoEtanol = 4.99;
const precoGasolina = 6.04;
const tipoCombustivel = 'G'

if (tipoCombustivel == 'G') {
    const consumoMedioPorKM = 10;
    var litrosConsumidos = consumoMedioPorKM * precoGasolina;
} else {
    const consumoMedioPorKM = 7;
    var litrosConsumidos = consumoMedioPorKM * precoEtanol;
}

const distanciaEmKM = 1580;

const custoViagem =  litrosConsumidos * distanciaEmKM;

console.log('O custo da viagem será de R$ ' + custoViagem.toFixed(2));

