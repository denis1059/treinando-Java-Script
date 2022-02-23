


function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  //mostra o valor
        configurable: true, // pode reconfigurar a chave ou nao
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                console.log('Valor invalido');
                return;
            }
            estoquePrivado = valor;
        }

    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'invalido';
console.log(p1.estoque);