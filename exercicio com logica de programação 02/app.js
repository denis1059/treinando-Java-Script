// escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem ( number). Retorne true se a imagem estiver no modo paisagem. *//



/*function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920, 1080));
*/



// tambem pode ser desta maneira:...

/*function ePaisagem(largura, altura){
    return largura > altura;
}

console.log(ePaisagem(1920, 1080));
*/

// na forma de arrow function

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));
