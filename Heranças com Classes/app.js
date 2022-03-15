class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;

    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'vermelho', 'Galaxy s9');
s1.ligar();
console.log(s1);

console.log('-------------------')

const s2 = new Tablet('Samsung', 'preto', 'Glaxy tab');
s2.ligar();
console.log(s2);
