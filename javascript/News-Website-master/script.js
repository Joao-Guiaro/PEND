const API_KEY = "debe8c93cd144c98a2f25f366530c2b6";

const URL_API =
    `https://newsapi.org/v2/everything?q=Brasil&language=pt&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`;


const destaque = document.querySelector("#noticiaDestaque");
const noticiasLaterais = document.querySelector("#noticiasLaterais");
const gridNoticias = document.querySelector("#gridNoticias");


fetch(URL_API)

    .then(function (resposta) {

        if (!resposta.ok) {
            throw new Error("Erro ao buscar notícias");
        }

        return resposta.json();

    })

    .then(function (dados) {

        console.log(dados);

        mostrarNoticias(dados.articles);

    })

    .catch(function (erro) {

        console.error(erro);

        destaque.innerHTML =
            "<p>Não foi possível carregar as notícias.</p>";

        noticiasLaterais.innerHTML =
            "<p>Não foi possível carregar as notícias.</p>";

        gridNoticias.innerHTML =
            "<p>Não foi possível carregar as notícias.</p>";

    });


function mostrarNoticias(noticias) {

    if (noticias.length === 0) {

        destaque.innerHTML =
            "<p>Nenhuma notícia encontrada.</p>";

        return;
    }


    // ==========================================
    // NOTÍCIA DE DESTAQUE
    // ==========================================

    const principal = noticias[0];

    destaque.innerHTML = `

        <a href="${principal.url}" target="_blank">

            <img
                src="${principal.urlToImage || "https://via.placeholder.com/800x450"}"
                alt="${principal.title}"
            >

        </a>


        <a href="${principal.url}" target="_blank">

            <h2>
                ${principal.title}
            </h2>

        </a>


        <p>
            ${principal.description || "Sem descrição disponível."}
        </p>

    `;


    // ==========================================
    // NOTÍCIAS LATERAIS
    // ==========================================

    noticiasLaterais.innerHTML = "";


    for (let i = 1; i < 3 && i < noticias.length; i++) {

        const noticia = noticias[i];


        const noticiaLateral = document.createElement("div");

        noticiaLateral.classList.add("noticia-lateral");


        noticiaLateral.innerHTML = `


            <a href="${noticia.url}" target="_blank">
                <img
                    src="${noticia.urlToImage || "https://via.placeholder.com/200"}"
                    alt="${noticia.title}"
                >
            </a>

            <div class="noticia-lateral-conteudo">

                <a href="${noticia.url}" target="_blank">
                    <h2>
                        ${noticia.title}
                    </h2>
                </a>
                <p>
                    ${noticia.description || "Sem descrição disponível."}
                </p>

            </div>

        `;


        noticiasLaterais.appendChild(noticiaLateral);

    }


    // ==========================================
    // ÚLTIMAS NOTÍCIAS
    // ==========================================

    gridNoticias.innerHTML = "";


    for (let i = 3; i < noticias.length; i++) {

        const noticia = noticias[i];


        const card = document.createElement("div");

        card.classList.add("noticia");


        card.innerHTML = `

            <a href="${noticia.url}" target="_blank">

                <img
                    src="${noticia.urlToImage || "https://via.placeholder.com/800x450"}"
                    alt="${noticia.title}"
                >

            </a>

            <a href="${noticia.url}" target="_blank">
                <h2>
                    ${noticia.title}
                </h2>
            </a>


            <p>
                ${noticia.description || "Sem descrição disponível."}
            </p>

        `;


        gridNoticias.appendChild(card);

    }

}