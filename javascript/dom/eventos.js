let botao = document.querySelector("#botao");
let texto = document.querySelector(".texto");

botao.addEventListener("click", function(){
    if (texto.textContent == "Texto alterado após o clique!"){
        texto.textContent = "Texto inicial..."
    }else{
        texto.textContent = "Texto alterado após o clique!";
    }
});

let input = document.querySelector("#nome");
let resultado = document.querySelector("#resultado");
input.addEventListener("keyup", function(){
    resultado.textContent = input.value;
});

