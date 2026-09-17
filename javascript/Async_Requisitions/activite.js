const botaoBuscar = document.querySelector("#buscarUsuarios");

const resultado = document.querySelector("#resultado");

const idUsuario = document.querySelector("#idUsuario");


botaoBuscar.addEventListener("click", async () => {

    const nome = idUsuario.value;

    if (nome === "") {

        resultado.innerHTML = "Digite o nome de uma skin";

        return;
    }

    try {

        const resposta = await fetch(
            `https://fortnite-api.com/v2/cosmetics/br/search?name=${nome}`
        );

        const dados = await resposta.json();

        console.log(dados);

        if (!resposta.ok) {

            resultado.innerHTML = "Item não encontrado.";

            return;
        }

        resultado.innerHTML = `

            <p>

                <strong>${dados.data.name}</strong><br>

                Tipo: ${dados.data.type.displayValue}<br>

                Raridade: ${dados.data.rarity.displayValue}<br>

                Descrição: ${dados.data.description}<br>

                <img src="${dados.data.images.icon}" width="200">

            </p>

            <hr>

        `;

    } catch (erro) {

        resultado.innerHTML = "Erro ao buscar item.";

        console.log(erro);

    }

});