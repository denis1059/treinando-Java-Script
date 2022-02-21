// juntando os conhecimentos de reduce, map e filter

//Retorne a soma do dobro de todos os pares
// filtrar pares
// Dobrar os valores
//Reduzir (somar tudo)



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;  // ira retornar os numeros pares [ 50, 80, 2, 8, 22 ]
}).map(function(valor){
    return valor *2;
// vai retornar o dobro dos valores pares [ 100, 160, 4, 16, 44 ]

}).reduce(function(ac, valor){
    return ac + valor; // vai somar todos os valores dos pares vai ser igual 324
});

//console.log(numerosPares);

/// segunda forma de fazer é em função reduzida


const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares2 = numeros2
.filter(valor =>valor % 2 === 0)
.map(valor =>valor *2)
.reduce((ac, valor) => ac + valor);


