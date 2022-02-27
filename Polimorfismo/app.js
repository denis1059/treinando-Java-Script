// Supeclass

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`)
    
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia} /${this.conta} ` +  
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo){
    CP.call(this, agencia, conta, saldo);
 
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const CC = new CC(11, 22, 0, 100);
CC.depositar(10);
CC.sacar(110);
CC.sacar(1);

/*const ContaPoupança = new ContaPoupança(12, 33, 0);
ContaPoupança.depositar(10);
ContaPoupança.sacar(110);
ContaPoupança.sacar(1);

*/












/*
const conta = new Conta(11, 22, 10);
conta.depositar(11);
conta.depositar(10);
conta.sacar(32);
console.log(conta);
*/