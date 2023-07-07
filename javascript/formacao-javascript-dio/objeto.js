const rony = {
    nome: "Rony Araujo",
    idade: 39,

    descricao: function(){
        console.log(`Meu nome é ${this.nome}`);
    }
};

console.log(rony.nome);

rony.altura = 1.9;

console.log(rony.altura);

rony.descricao();

