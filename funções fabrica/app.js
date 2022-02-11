//Factory function

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
       get nomeCompleto(){
            return `${nome} ${sobrenome}`;
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Denis', 'souza', 1.93, 75 );
console.log(p1.nomeCompleto);
