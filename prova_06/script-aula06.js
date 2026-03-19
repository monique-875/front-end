const botao = document.querySelector("#btn-curtir")
const contador = document.querySelector("#contador")

let curtidas = 0

botao.addEventListener("click", () => {
    curtidas++
    contador.textContent = curtidas
})

const campo = document.querySelector("#campo-texto")
const preview = document.querySelector("#preview-texto")

campo.addEventListener("input", () => {
    preview.textContent = campo.value
})


const caixaCor = document.querySelector("#caixa-cor")
caixaCor.addEventListener("mouseenter", () => {
    caixaCor.style.backgroundColor = "blue"
})

caixaCor.addEventListener("mouseleave", () => {
    caixaCor.style.backgroundColor = ""
})

const botaoReset = document.querySelector("#btn-reset")


botaoReset.addEventListener("click", () => {
    
    curtidas = 0// contador zerado
    contador.textContent = curtidas

    campo.value = ""// limpar campo do texto
    preview.textContent = ""
})



