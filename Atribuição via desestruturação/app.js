const pessoa = {
    nome: 'Denis',
    sobrenome: 'Souza',
    idade: 23,
    endereco: {
        rua: 'Haroldo',
        numero: 50  
    }
};

// atribuição via desestruturação
const {nome, sobrenome} = pessoa;
const {endereco: {rua, numero}} = pessoa;
console.log(nome, sobrenome, rua, numero);
