// maneira de concatenar os arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
//console.log(a3);


// utilizando o metodo spread e o rest

const aray1 = [1,2,3,];
const aray2 = [4,5,6,];

const a4 =[...aray1, ...aray2, 'Luiz', ...[7, 8, 9]];

console.log(a4);

