function calculaPrecoFinal(formaPagamento, valorProduto) {
    if (formaPagamento == 1) {
        return valorProduto * 0.9;
    } else if (formaPagamento == 2) {
        return valorProduto * 0.85;
    } else if (formaPagamento == 3) {
        return valorProduto;
    } else {
        return valorProduto * 1.1;
    }
}


console.log('O valor final do produto é R$' + calculaPrecoFinal(3, 100).toFixed(2));