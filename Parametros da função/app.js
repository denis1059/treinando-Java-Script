// quando uma função nao tem argumento, os dados sao colocados em arguments
function funcao(){
    console.log(arguments);
}

funcao('valor', 'a', 'b', 'c');

function funcao2(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);

}

funcao2(1, 2, 3, 4, 5, 6);

//Atribuição via desestruturação

function funcao3({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Denis', sobrenome: 'Souza', idade: 23};
funcao3(obj);

//

function funcao4([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao4(['James', 'Cardiaco', 25]);

// rest operator

function conta(operador, acumulador, ...numeros){

    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;

    }
    console.log(acumulador);

}
conta('+', 1, 5, 5, 10);