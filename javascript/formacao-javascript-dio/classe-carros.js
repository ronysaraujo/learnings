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

    gastoCombustivel(precoCombustivel){
        return precoCombustivel / this.mediaKMporLitro;
    }
}

const tcross = new Carros();
tcross.mediaKMporLitro = 10;

let distancia = 2530;
let precoCombustivel = 6.04;
console.log('O custo da viagem é de R$ ' + tcross.gastoCombustivel(precoCombustivel) * distancia);