/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    mediaKMporLitro;

    constructor(marca, cor, mediaKMporLitro){
        this.marca = marca;
        this.cor = cor;
        this.mediaKMporLitro =  mediaKMporLitro;
        //return precoCombustivel / this.mediaKMporLitro;
    }

    gastoCombustivel(precoCombustivel){
        return precoCombustivel / this.mediaKMporLitro;
    }

    calcularCustoViagem(distancia, precoCombustivel){
        return (precoCombustivel / this.mediaKMporLitro * distancia).toFixed(2);
    }
}

const tcross = new Carros('VW/TCross', 'Branco', 10);

let distancia = 2530;
let precoCombustivel = 6.04;
console.log(tcross);
console.log('Meu carro é um ' + tcross.marca + ' da cor ' + tcross.cor);
console.log('O custo da viagem é de R$ ' + tcross.calcularCustoViagem(distancia, precoCombustivel));
//console.log('O custo da viagem é de R$ ' + tcross.gastoCombustivel(precoCombustivel) * distancia);