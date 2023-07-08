/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let formaPagamento = 4;
let valorProduto = 100;
let valorFinal;

if (formaPagamento == 1) {
    valorFinal = valorProduto * 0.9;
} else if (formaPagamento == 2) {
    valorFinal = valorProduto * 0.85;
} else if (formaPagamento == 3) {
    valorFinal = valorProduto;
} else {
    valorFinal = valorProduto * 1.1;
}

console.log('O valor final do produto é R$' + valorFinal);