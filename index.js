//escrevendo modelo para DIO, posteriormente transformando para vscode
const prompt = require('prompt-sync')();
//- Variáveis
let name = "Guerreiro Zev"
console.log("Bem vindo ao jogo! Eu sou o " + name + " e vamos juntos vencer o desafio do Felipão!");

class Heroi {
    constructor(name, idade, tipo) {
        this.name = name
        this.idade = idade
        this.tipo = tipo
    }
}

let guerreiro = new Heroi('Zev', '36', 'Guerreiro');
let mago = new Heroi('Eron', '42', 'Mago');
let monge = new Heroi('Ryu', '29', 'Monge');
let ninja = new Heroi('Renji', '25', 'Ninja');

console.log(ninja)

    atacar(){
        console.log("O " + `${this.tipo}` + `${this.name}` + atacou com `${this.poder}!`);
            
    }
}
console.log(heroi)
