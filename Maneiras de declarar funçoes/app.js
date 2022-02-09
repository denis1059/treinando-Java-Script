// Declaração de função (function hoisting)

function falaOi(){
    console.log('Oi');
}

// função é um objeto de primeira classe (first-class)
// podemos colocar uma função dentro de uma variavel
// pode executa essa função com a variavel declarada 

const ola = function(){
    console.log('oi 2');
};

// arrow function

const funcaoArrow = () => {
    console.log('sou uma arrow function');
};

funcaoArrow();

//Dentro de um objeto

const objeto = {
    falar (){
        console.log('estou falando...');
    }
};

objeto.falar()