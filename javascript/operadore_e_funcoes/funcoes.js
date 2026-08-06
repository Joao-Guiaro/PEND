function saudacao(){
    console.log("Olá, JavaScript!");
}

function saudacao2(nome){
    console.log("Olá, "+ nome);
}

function somar(a, b){
    return a + b;
}

saudacao();
saudacao2("João");
console.log(somar(2, 3));

//Activite 7

function imc(peso, altura){
    console.log("Seu IMC é",peso/(altura**2));
}

//Activite 8

function parimpar(x){
    if (x%2 == 0){
        console.log("O número",x,"é par");
    }else{
         console.log("O número",x,"é impar");
    }
}

imc(64.5, 1.75);
parimpar(100);

console.log("Funções Nativas");

let agora = new Date();
console.log(agora);

function mostrarDataHora(){
    let data = new Date();


console.log("Dia:", data.getDate());
console.log("Mês:", data.getMonth() + 1);
console.log("Ano:", data.getFullYear());
console.log("Hora:", data.getHours());
console.log("Minutos:", data.getMinutes());

}

mostrarDataHora();

let data = new Date();
console.log(`Horas: ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}:${String(data.getSeconds()).padStart(2, '0')} ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth()).padStart(2, '0')+1}/${data.getFullYear()}`);

console.log(`O valor de PI é ${Math.PI}`);

function calcularOperacoes(numero) {
    console.log(`Raiz: ${Math.sqrt(numero)}`);
    console.log(`Arredondado: ${Math.round(numero)}`);
    console.log(`Para cima: ${Math.ceil(numero)}`);
    console.log(`Para baixa: ${Math.floor(numero)}`);
    console.log(`Ao quadrado: ${Math.pow(numero, 2)}`);
    console.log(`Valor Absoluto: ${Math.abs(numero)}`);
    
}

calcularOperacoes(7.8);

function analisarTexto(texto) {
    console.log(`Tamanho: ${texto.length}`);
    console.log(`Maiúsculo: ${texto.toUpperCase()}`);
    console.log(`Minúsculo: ${texto.toLowerCase()}`);
}

analisarTexto("JavaScript");

function verifica(frase) {
    console.log(frase.includes("javascript"));
}

verifica("Eu estudo JavaScript");

function junta(nome, curso) {
    return "Aluno: " + nome + "| Curso: " + curso;
}
console.log(junta("José", "Front-End"));

let soma = 10 + 5 * 2
console.log(soma)