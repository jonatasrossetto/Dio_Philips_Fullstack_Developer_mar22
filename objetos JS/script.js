'use strict';
/*
Atividade: Conta Bancária
    Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

    * Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
    * Dentro de ContaBancaria, construa o getter e o setter de saldo;
    * Dentro de ContaBancaria, crie os métodos sacar e depositar;
    * Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
    * Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
    * Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
    * Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
    * Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
    * Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/
class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    get saldo(){
        return this._saldo;
    }
    sacar(valor){
        if (valor>this._saldo) {return "Not enough funds to withdraw"}
        this._saldo = this._saldo - valor;
        return `Saldo final é ${this._saldo}`;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return `Saldo final é ${this._saldo}`;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(agencia,numero,saldo, cartaoCredito){
        super(agencia,numero,saldo);
        this.tipo='corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return `Cartão de crédito? ${this._cartaoCredito}`;
    }
    set cartaoCredito(valor){
        this._cartaoCredito=valor;
        return `Cartão de crédito? ${this._cartaoCredito}`;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo='poupança';
        this._saldo=0;
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo='universitária';
        
    }
    sacar(valor){
        if (valor>this._saldo) {return "Not enough funds to withdraw"};
        if (valor>500) {return "Not allowed, withdraw limit is $500"};
        this._saldo = this._saldo - valor;
        return `Balance: $${this._saldo}`;
    }
}

const minhaConta = new ContaBancaria(1,2,'corrente');
console.log(minhaConta);

const corrente = new ContaCorrente(2,3,500,true);
console.log(corrente);

const poupanca = new ContaPoupanca(2,4);
console.log(poupanca);

const universitaria = new ContaUniversitaria(2,5,1000);
console.log(universitaria);

universitaria.depositar(5000);
console.log(universitaria.saldo);
console.log(universitaria.sacar(600));