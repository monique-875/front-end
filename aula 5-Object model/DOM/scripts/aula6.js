const inputQtd = document.querySelector('#qtd-lasanha')
const precotexto = document.querySelector('#preco-lasanha')

if(inputQtd && precotexto){
    inputQtd.addEventListener("input" , () => {
        const precoUnitario = 45.0
        const total = Number(inputQtd.value) *precoUnitario
        precotexto.textContent = `R$ ${total.toFixed(2)}`
        precotexto.style.color= total > 150? "green" : "#ff9100"
    })
}

// 2.1  eventos de clique para CLASS-  Event.Target
document.addEventListener('click',(event)=>{// busca na pagina toda independente de quem seja
    const clicado = event.target // fazer a açãoi/mudança/aplicacao que voce quiser mediante ao que foi clicado

})


// 2.2 Buscando com referencia ao pai #secao-massas
const massas = document.querySelector("#secao-massas")

massas.addEventListener('click', (event)=>{
    const clicado = event.target

    if(clicado.classList.contains('btn-pedido')){//contains ele busca se na class que foi puxada  está logada com o btn-pedidos
        console.log("Voce clicou em um botao de massas!")
    }
})

// 2.3 Buscar evento direto da class

const botoesPedido = document.querySelectorAll(".btn-pedido")

botoesPedido.forEach((botao)=>{
    botao.addEventListener("click", (event)=>{
        botao.textContent = "✔️ Pedido enviado"
        botao.style.backgroundColor = "red"
        botao.style.cursor = "default"
        botao.disabled = true //desabilitar click

    } )
})// forEach para cada pensar como um array ele vai passear por todas as coisas kkk
