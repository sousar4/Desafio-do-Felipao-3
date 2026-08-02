//escrevendo modelo para DIO, posteriormente transformando para vscode
const prompt = require('prompt-sync')();
//- Variáveis
let name = "Guerreiro Zev"
console.log("Bem vindo ao jogo! Eu sou o " + name + " e vamos juntos vencer o desafio do Felipão!");

class Heroi {
    constructor(nameHeroi, idadeHeroi, tipoHeroi) {
        this.nameHeroi = nameHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
let Heroi = new Heroi("Zev", 36, "Guerreiro");

    atacar(){
        console.log("O " + `${this.tipo}` + `${this.name}` + atacou com `${this.poder}!`);
            
    }
}
console.log(heroi)
