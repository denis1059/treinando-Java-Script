//filter, map, reduce filtra os valores de um array

// filter, sempre ira retornar um array, com a mesma quantidade de elementos ou menos.


//Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);

//console.log(numerosFiltrados);


//Retorne as pessoas que tem o nome com 5 çetras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com (a)
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const maisde5letras = pessoas.filter(obj => obj.nome.length >= 5);

const maisde50anos = pessoas.filter(obj => obj.idade > 50);
console.log(maisde50anos);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);


//console.log(maisde5letras);