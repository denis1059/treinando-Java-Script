
//se precisar copiar um objeto para outro objeto
const produto = {nome: 'Produto', preco: 1.8};
const caneca = Object.assign({},produto, {material: 'Porcelana'});
Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable:false
})

caneca.nome = 'Outro nome';
caneca.preco = 2.5;

console.log(produto);

// mostra como esta a propriedade do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log('----------------------------')

// aqui ele pega somente os valores do objeto
console.log(Object.values(produto));

console.log('----------------------------')
// retorna os arrays do objeto separados
console.log(Object.entries(produto));



