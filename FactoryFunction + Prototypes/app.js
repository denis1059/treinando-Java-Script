function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`);
        },
        Comer(){
            console.log(`${this.nome} está comendo`);
        },
        beber(){
            console.log(`${this.nome} está bebendo`);
        }

    };
}
    
    return Object.create(pessoaPrototype, {
        nome:{ value: nome},
        sobrenome: {value: sobrenome}
    });

const p1 = criaPessoa('Denis', 'Souza');
console.log(p1);