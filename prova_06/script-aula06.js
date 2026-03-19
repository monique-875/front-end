
// Interação (Clique): Ao clicar no botão "Curtir", incremente o número no contador de curtidas.//
const botao = document.querySelector("#btn-curtir")
const contador = document.querySelector("#contador")

let curtidas = 0

botao.addEventListener("click", () => {
    curtidas++
    contador.textContent = curtidas
})

//Monitoramento (Input): Sempre que o usuário digitar no campo de texto, o parágrafo de "Preview" deve mostrar o texto em tempo real.//

const campo = document.querySelector("#campo-texto")
const preview = document.querySelector("#preview-texto")

campo.addEventListener("input", () => {
    preview.textContent = campo.value
})

// Sensores (Mouse): Ao entrar com o mouse na caixa de cor, mude-a para azul. Ao sair, ela deve voltar à cor original.//

const caixaCor = document.querySelector("#caixa-cor")
caixaCor.addEventListener("mouseenter", () => {
    caixaCor.style.backgroundColor = "blue"
})

caixaCor.addEventListener("mouseleave", () => {
    caixaCor.style.backgroundColor = ""
})


// Desafio Extra (Reset): Crie um botão (ou use uma tecla) que limpe o input e zera o contador ao mesmo tempo.//

const botaoReset = document.querySelector("#btn-reset")


botaoReset.addEventListener("click", () => {
    
    curtidas = 0// contador zerado
    contador.textContent = curtidas

    campo.value = ""// limpar campo do texto
    preview.textContent = ""
})



