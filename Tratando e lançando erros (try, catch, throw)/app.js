
// quando aparece algum erro de sintaxe ou algo do tipo, podemos editar o que vai acontecer com esse erro, exemplo abaixo aparece uma mensagem personalizada.


/*try {
    console.log(naoExisto);
} catch(err){
    console.log('nome de algum erro');
 
}
*/

// exemplo pratico de como é tratado um erro

function soma(x, y) {
    if (
        typeof x !== 'number' || typeof y !== 'number'
    ){
        throw new Error('x e y prrecisam ser numeros.');
    }

    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('1',2));
} catch(error){
    console.log('Algum erro mais amigavel para o usuario');
}