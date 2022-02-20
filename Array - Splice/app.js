//para remover algum elemento do array ou adiciona
//               -5        -4       -3        -2          -1
//               0         1        2         3           4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(3, 2, 'Denis');
console.log(nomes, removidos);

// nomes.splice(indice atual, delete, elem1, elem2, elem3)


//pode simular o pop, unshift


  