//escrevendo modelo para DIO, posteriormente transformando para vscode
const prompt = require('prompt-sync')();
//- Variáveis
let name = "Guerreiro Zev"
console.log("Bem vindo ao jogo! Eu sou o " + name + " e vamos juntos vencer o desafio do Felipão!");

class Heroi {
    constructor(name, idade, tipo) {
        this.name = "Zev"
        this.idade = 36
        this.tipo = Guerreiro
    }
    atacar(){
        console.log("O " + `${this.tipo}` + `${this.name}` + atacou com `${this.poder}!`);
            
    }
}
console.log(heroi)
