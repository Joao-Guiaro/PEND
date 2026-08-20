class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }
    aplicarDesconto() {
        const precoDesconto = this.preco - (this.preco * this.desconto / 100);
        return precoDesconto;
    }

}
class Mercadorias {
    constructor() {
        this.produtos = [];
        this.recuperarLocal();
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.adicionarLocal();
    }

    exibir() {

        const resultado = document.querySelector("#resultado")

        resultado.innerHTML = "";

        this.produtos.forEach((produto, position) => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.aplicarDesconto()}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}</p><br><br>
                    <button onclick="mercadorias.excluir(${position})">Excluir</button>
                </div><br>
                `;
        })

    }
    excluir(position) {
        this.produtos.splice(position, 1);
        this.adicionarLocal();
        this.exibir();
    }
    adicionarLocal() {
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
    }
    recuperarLocal() {
        const dados = localStorage.getItem("produtos");

        if (dados) {
            const produtoSalvo = JSON.parse(dados);

            this.produtos = produtoSalvo.map(produto => {
                return new Produto(
                    produto.nome,
                    produto.preco,
                    produto.categoria,
                    produto.desconto,
                );
            }

            );
        }
    }
}
const mercadorias = new Mercadorias();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
const botaoExcluir = document.querySelector("#botaoExcluir")

botaoCadastrar.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    mercadorias.adicionarProduto(produto);
    mercadorias.exibir();
})
mercadorias.exibir();