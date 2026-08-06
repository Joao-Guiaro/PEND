document.getElementById("conteudo").innerHTML = "<p> Olá, mundo DOM! (Código HTML = inner.HTML)</p>";
document.getElementById("mensagem").textContent = "Texto simples, sem HTML (Código HTML = textContent)";
document.getElementById("foto").setAttribute("src", "https://media.tenor.com/A_XixwIPZcgAAAAM/stan-twt-skeleton-banging-shield.gif");
let url = document.getElementById("link").getAttribute("href");
console.log(url);
document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");
document.getElementById("alert").classList.remove("oculto");
let novoParagrafo = document.createElement("p");

novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript";

document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item Novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);