//Polimorfismo

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo >= valor) {
    this.saldo -= valor;
    console.log(`Você sacou R$${valor}`);
  } else {
    console.log(`Saldo insuficiente.`);
    this.verSaldo();
  }
};

Conta.prototype.receberPix = function (pix) {
  this.saldo += pix;
  console.log(`Você recebeu um pix no valor de ${pix}.`);
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`A sua conta possui: R$${this.saldo}`);
};

const conta1 = new Conta(1, 1, 0);
conta1.receberPix(15.55);
conta1.sacar(12.35);
console.log(conta1);

console.log("----------------------------");

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
  if (this.saldo + this.limite >= valor) {
    this.saldo -= valor;
    console.log(`Você sacou R$${valor}`);
  } else {
    console.log(`Saldo insuficiente.`);
    this.verSaldo();
  }
};

const tiagoCC = new CC(2, 2, 200, 350);
console.log(CC.prototype);
tiagoCC.receberPix(200);

tiagoCC.sacar(650);
tiagoCC.sacar(100);

console.log("----------------------------");

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;
