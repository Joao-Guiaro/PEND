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
        this.produtos = []
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    exibir() {

        const resultado = document.querySelector("#resultado")

        resultado.innerHTML = "";

        this.produtos.forEach( produto => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.aplicarDesconto()}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}</p>
                </div><br>
                `;
        })

    }
}
const mercadorias = new Mercadorias();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value)

    mercadorias.adicionarProduto(produto);
    mercadorias.exibir();
})