// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2. INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

//3 - DELEGAÇÃO DE EVENTOS

const main = document.querySelector("main")
main.addEventListener("click", (event) =>{
    const clicado = event.target

    // 3.1 QUANTIDADE DE ITENS
        if(clicado.classList.contains("btn-menos")){
            const box = clicado.parentElement//caixa do prato
            const spanQtd = box.querySelector(".qtd-valor") //buscar no pai span
            const valorAtual = Number(spanQtd.textContent) //usa o text content, pq tras o conteudo em texto que existe dentro desse span
            spanQtd.textContent = Math.max(1, valorAtual - 1) //Limite 1, o prato n pode ser 0, pq o math max maximo
            atualizarPrecoCard(box)
            return
        }

            if(clicado.classList.contains("btn-mais")){
            const box = clicado.parentElement//caixa do prato
            const spanQtd = box.querySelector(".qtd-valor") //buscar no pai span
            spanQtd.textContent = Number(spanQtd.textContent) + 1
            atualizarPrecoCard(box)
            return
        }


    // 3.2 AÇÃO DO BTN-PEDIDO

        if(clicado.classList.contains("btn-pedido")){
            event.preventDefault()

            const card = clicado.parentElement
            const nomePrato = card.querySelector("h3").textContent
            const quantidade = card.querySelector(".qtd-valor").textContent
            const precoExibido = card.querySelector(".preco").textContent

            // Efeito visual quando clicado "pedir agora"
            clicado.textContent = "✔️ Adicionado"
            clicado.style.backgroundColor = "#42aa42"
            clicado.disable = true

            setTimeout(()=>{
                clicado.textContent = "Pedir agora"
                clicado.style.backgroundColor = ""
                clicado.disable = false
            }, 1500)


        if(!card.querySelector(".badge-adicionado")){
            card.insertAdjacentHTML(
                "beforeend", "<span class='badge-adicionado'> ✔️ no resumo </span>"// ele é o bad adicionado
            )
        }

        adiconarItemAoResumo(nomePrato, quantidade, precoExibido, card)

        }
}) //acabou o main ouvinte click


// 4 - FUNÇÕES DE ATUALIZAR PREÇO e INSERIR PRODUTO NO RESUMO

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))//number só q float, getAttribute pegar o atributo de dentro da tag
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",") //replace = substituir alguma informação q vc queira
    spanPreco.style.color = total > 150 ? "#ff0000" : "#e67e22"
}


function adiconarItemAoResumo(nome, qtd, preco, cardOrigem){
   const secaoResumo = document.querySelector("#secao-resumo")
   const listaResumo = document.querySelector("#lista-resumo")
   
    if(!secaoResumo || !listaResumo) return

// Exibindo a secao resumo

    secaoResumo.style.display = "block"

// Criando um item na lista

    const itemLista = document.createElement("li")
    itemLista.classList.add("item-resumo")


    // Informações - TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.textContent = qtd + "x" + nome +" - " + preco

    // Criando botão para remover prato
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "❌"
    btnRemover.classList.add("btn-remover")


btnRemover.addEventListener("click", () => {
  itemLista.remove()

  const badge = cardOrigem.querySelector(".badge-adicionado")

  if(badge)badge.remove()

    if(listaResumo.children.lenght ===0){
      secaoResumo.style.display = "none"// quando nao tiver mais nenhum prato adicionado
    }
})

// é aqui que é inserido REALMETE da pagina (parte visual)

itemLista.appendChild(textoSpan)
itemLista.appendChild(btnRemover)
listaResumo.appendChild(itemLista)
}
//fim da função AdicionarItemAoResumo

const btnLimpar = document.querySelector('#btn-limpar')

if(btnLimpar){

  btnLimpar.addEventListener("click", () =>{
    const listaResumo = document.querySelector('#lista-resumo')
    const secaoResumo = document.querySelector('#secao-resumo')

// Remover os badge que criamos no js apaga posiçoes tipo 0123 (dados)

    document.querySelectorAll(".badge-adicionado").forEach ((b) => b. remove())

// Remover os filhos dessa lista item a item apagou o primeiro o segundo vira o primeiro (dados)

while(listaResumo.firstElementChild){
  listaResumo.firstElementChild.remove()
}

// sumir com a parte visual
secaoResumo.style.display = "none"

  })
}