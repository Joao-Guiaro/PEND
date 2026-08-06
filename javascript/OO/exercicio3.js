class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    vender(){
        console.log(`O produto ${this.nome} foi vendido`);
    }
    repor(){
        console.log(`O produto ${this.nome} foi reposto`);
    }
    alterarPreco(){
        this.preco = 30
        console.log(`O preço do ${this.nome} foi alterado ${this.preco}`);
    }
}

const produto1 = new Produto("Celular", 3499, "Disponível");
const produto2 = new Produto("Monitor", 1199, "Disponível");
const produto3 = new Produto("Computador", 4999, "Disponível");

console.log(" ")
console.log("Exercício 3")
console.log(" ")
console.log("produto 1: ", produto1)
console.log("produto 2: ", produto2)
console.log("produto 3: ", produto3)
console.log("------------------------------------------------");

console.log("Atributos do produto 1");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);


console.log("------------------------------------------------");

console.log("Atributos do produto 2");
console.log("- ", produto2.nome);
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque);

console.log("------------------------------------------------");
console.log("Atributos do produto 3");
console.log("- ", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);


console.log("------------------------------------------------");

produto1.vender();
produto2.repor();
produto3.alterarPreco();

