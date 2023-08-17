const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outPrecoTerceiro")


frm.addEventListener("submit", (e) =>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const terceiro = preco / 2;
    const total = (preco * 2) + terceiro;

    const promocao = Math.floor(preco*3) - 0.50
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total. toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${terceiro. toFixed(2)}`

    e.preventDefault()
})