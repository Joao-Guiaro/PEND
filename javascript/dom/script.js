let botao = document.getElementById("botao");


botao.addEventListener("click", function(){
    alert("Olá, DOM!");
});

let titulo = document.querySelector("#titulo");
let botao2 = document.getElementById("botao2");
botao2.addEventListener("click", function(){    
    titulo.textContent = "Texto alterado para JavaScript";
})

