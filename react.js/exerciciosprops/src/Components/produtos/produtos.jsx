import Produto from "../exercicio02/produto";

export default function Produtos() {
    const produtos = [
        {
            nome: "bolsa",
            preco:"1000",
            descricao:"bolsa de couro"
        },
        {
            nome: "gloss",
            preco:"10",
            descricao:"gloss com glitter"
        },
    ]
    return (
        produtos.map((produto, index) => {
            return (
                <Produto
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                />
            )
        })

    )
}