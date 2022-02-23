// define a propriedade de um objeto 

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor da chave
        writable: false, //pode alterar o valor ou nao
        configurable: true // pode reconfigurar a chave ou nao
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 20;
console.log(p1.nome);