class Aluno{
    constructor(nome, idade, curso, matricula){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
    aprender(){
        console.log(`O aluno(a) ${this.nome} está aprendendo matemática`);
    }
    estudar(){
        console.log(`O aluno(a) ${this.nome} está estudando inglês`);
    }
    apresentar(){
        console.log(`O aluno(a) ${this.nome} está apresentando `)
    }
}
const aluno1 = new Aluno("João Vitor", 17, "Desenvolvimento de Sistemas", 1);
const aluno2 = new Aluno("Pedro", 25, "Odontologia", 2);
const aluno3 = new Aluno("Lucas", 17, "Economia", 3);

console.log(" ")
console.log("Exercício 2")
console.log(" ")
console.log("Aluno 1: ", aluno1)
console.log("Aluno 2: ", aluno2)
console.log("Aluno 3: ", aluno3)
console.log("------------------------------------------------");

console.log("Atributos do Aluno 1");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);

console.log("------------------------------------------------");

console.log("Atributos do Aluno 2");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);
console.log("------------------------------------------------");
console.log("Atributos do Aluno 3");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);

console.log("------------------------------------------------");

aluno1.aprender();
aluno2.estudar();
aluno3.apresentar();

