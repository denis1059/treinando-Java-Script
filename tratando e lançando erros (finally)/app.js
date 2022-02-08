/*
try{
    // É executada quando não há erros
}catch (erro){
    // É executada quando há erros
} finally{
    // sempre sera executada( nem semore é utilizado)
}

*/

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de date.')
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{

    const data = new Date('08-02-2022 08:00:50');
    const hora = retornaHora(11);
    console.log(hora);

}catch(e){
    //tratar o erro 
   console.log('Algo deu errado')

}finally{
    console.log('algo')
}


