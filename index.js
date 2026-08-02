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
    
   ataque () {
let ataque = ""

switch(this.tipo) {
    case "mago":
        ataque = "magia";
        break;

    case "guerreiro":
        ataque = "espada";
        break;

    case "monge":
        ataque = "artes marciais";
        break;

    case "ninja":
        ataque = "shuriken";
        break;
		}
        
console.log(`O ${this.tipo} atacou usando ${ataque}`)
         
}
}

let guerreiro = new Heroi('Zev', '36', 'guerreiro');
let mago = new Heroi('Eron', '42', 'mago');
let monge = new Heroi('Ryu', '29', 'monge');
let ninja = new Heroi('Renji', '25', 'ninja');

ninja.ataque()