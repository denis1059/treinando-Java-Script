const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if (numero === 5){
        console.log('Pulei o numero 5');
        continue;
    }
    
    console.log (numero);

    if (numero === 7){
        console.log('7 encontrado, parando..');
        break;
    }
   
}



// sempre que o laço encontrar a palavra continue, ele vai continuar enquanto 