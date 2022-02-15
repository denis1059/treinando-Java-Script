// função construtora fabrica objetos = sempre precisa iniar com letras maiusculas
// não pode esquecer de utilizar a palavra  (new) 

// função fabrica, ela fabrica os objetos

function Pessoa(nome, sobrenome){
    
    // atributos ou metodos Privados
    const ID = 123456;
    const metodoInterno = function(){

    }
// atributos ou metodos publicos

    this.nome = nome ;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa ('Denis' , 'Souza');
const p2 = new Pessoa ('Maria', 'Luiza');
p2.metodo();