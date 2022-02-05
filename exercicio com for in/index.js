// For Classico - geralemnte com interaveis (array pu strings)
// for in - retorna o indice ou chave (strings, arrays pu objetos)
// for of - retorna o valor em si ( iteraveis, arrays ou strings)


const pessoa = {
    nome: 'Denis',
    sobrenome: 'souza',
    idade: '23'
}

for (let i in pessoa){
    console.log(i, pessoa [i])
}

//iteração

/*const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas){
    console.log(frutas[indice]);
}
*/

