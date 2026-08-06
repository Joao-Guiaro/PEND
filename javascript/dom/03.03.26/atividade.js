//atividade 1

let titulo = document.querySelector("#titulo");
let preto = document.querySelector("#preto");
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");

preto.addEventListener("click", function(){
    titulo.style.color = "black";
});
azul.addEventListener("click", function(){
    titulo.style.color = "blue";
});
vermelho.addEventListener("click", function(){
    titulo.style.color = "red";
});

//atividade 2

let botao = document.querySelector("#botao");
botao.textContent = "Esconder/Mostrar";
let mensagem = document.querySelector("#mensagem");
mensagem.textContent = "Hello world";

botao.addEventListener("click", function(){
    if(mensagem.textContent == ""){
        mensagem.textContent = "Hello world";
    }else{
        mensagem.textContent = "";
    }
})

//atividade 3

let texto = document.querySelector('#texto');
let contador = document.querySelector('#contador');
texto.addEventListener("keyup", function(){
    contador.textContent = (`Caracteres Digitados: ${texto.value.length}`);
});

// atividade 4
let conta = document.querySelector('#conta');
let paragrafo = document.querySelector('#paragrafo');
let quant = 0
conta.addEventListener("click", function(){
    quant += 1;
    paragrafo.textContent = quant;
});

//atividade 5 e 6

let lista = document.querySelector('#lista');
let item = document.querySelector('#item');
let adicionar = document.querySelector('#adi');


adicionar.addEventListener("click", function(){
    let novo = document.createElement("li");
    novo.textContent = item.value;
    document.querySelector("#lista").appendChild(novo);
    novo.addEventListener("click", function(){
    let confirma = confirm("Tem certeza que deseja excluir o item da lista ?");
    if (confirma){
        document.querySelector("#lista").removeChild(novo);
        
    }else {
        alert("Item não removido");
    }
});
});

//desafio hard
let nome = document.querySelector('#nome');
let enviar = document.querySelector('#enviar');
let escrita = document.querySelector('#escrita');

enviar.addEventListener("click", function(){
    if (nome.value.trim() == "" || /^[0-9.,?;:!@#$%¨&*()_+=\|?¹²³]+$/.test(nome.value)){
        escrita.textContent = "Preencha o campo com letras";
        document.querySelector('#escrita').style.color = "red"
    }else{
        escrita.textContent = "Nome enviado com sucesso";
        document.querySelector('#escrita').style.color = "green "
    }
});

//exercício de validação
let email = document.querySelector('#email');
let validar = document.querySelector('#validar');
let veri = document.querySelector('#veri');
validar.addEventListener("click", function(){
    if(email.value.includes("@") && email.value.includes(".com")){
        veri.textContent = "Email validado com sucesso";
        document.querySelector('#veri').style.color = 'green';
    }else{
        veri.textContent = "É necessário conter '@' e '.com' no email!";
        document.querySelector('#veri').style.color = 'red';
    }
});

let senha = document.querySelector('#senha')
let caracter = document.querySelector('#caracter')
senha.addEventListener("keyup", function(){
    if(senha.value.length <6 ){
        caracter.textContent = "Senha fraca";
        caracter.style.color = 'red';
    }else if(senha.value.length >= 6 && senha.value.length < 10){
        caracter.textContent = "Senha aceitável";
        caracter.style.color = 'orange';
    }else{
        caracter.textContent = "Senha forte";
        caracter.style.color = 'green';
    }

})


