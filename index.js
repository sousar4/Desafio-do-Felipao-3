//Escrevendo as Classes de Um Jogo de herois para o projeto do Felipao da DIO
const prompt = require('prompt-sync')();
//- Variáveis
//- estrututra condicional
class Heroi {
    constructor(name, idade, tipo) {
        this.name = name
        this.idade = idade
        this.tipo = tipo
    }
    
   ataque () {
//- criando switch case para definir o tipo de ataque do heroi
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
// dando vida aos herois
let guerreiro = new Heroi('Zev', '36', 'guerreiro');
let mago = new Heroi('Eron', '42', 'mago');
let monge = new Heroi('Ryu', '29', 'monge');
let ninja = new Heroi('Renji', '25', 'ninja');

guerreiro.ataque()