class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const rony = new Pessoa('Rony Araujo', 39);

//rony.nome = 'Rony Araujo';

//rony.descrever();

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo que ${p2.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const ale = new Pessoa('Alessandra Araujo', 39);

compararPessoas(rony, ale);