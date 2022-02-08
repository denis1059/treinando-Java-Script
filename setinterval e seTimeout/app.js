function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
    hour12: false
});
}


// função anonima para ser chamada no intervalo de tempo de 1000 ms


const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);


// aqui ela vai encerrar depois de 5 segundos 
setTimeout(function(){
    clearInterval(timer);
}, 5000);