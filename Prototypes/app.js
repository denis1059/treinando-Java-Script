/*
JavaScript é baseado em prototipos para passar propriedades e metodos de um objeto para outro.

Definição de Prototipo:
Prototipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referencia interna para um prototipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para cria-la. Quando tentamos acessar um membro no proprio objeto e depois a cadeia de prototipos é usada até o topo (null) até encontrar (ou não) tal membro  
 */

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' '+ this.sobrenome;
}

//Pessoa.prototype === pessoa1.___proto___

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}


const pessoa1 = new Pessoa('Denis', 'Souza'); // função construtora
const pessoa2 = new Pessoa('Maria', 'Souza'); // função construtora
const data = new Date(); // função construtora

console.dir(pessoa1);