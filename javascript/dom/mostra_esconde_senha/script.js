let olho = document.querySelector("#botaosenha");
let input = document.querySelector("#senha");
olho.addEventListener("hover", function(){
    if(input.type === "password"){
        input.setAttribute('type', 'text');
        olho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else{
        input.setAttribute('type', 'password');
        olho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');

    }
});
