// O termo Herança é muito usado para descrever que as caracteristicas de um objeto são passadas para outro objeto.

//JavaScript não é uma linguagem que apresenta essa caracteristica em especifico, portanto não existe "Herança". O que ocorre na verdade é "Delegação" é o termo mais correto.

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
   
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const produto = new Produto ('algo', 10);
const caneca = new Caneca ('xicar', 10 , 'porcelana', 50);

console.log(caneca);

console.log(produto);


console.log(camiseta);