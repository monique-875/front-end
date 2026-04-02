const saudacao = document.querySelector("#saudacao-voluntario");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Plantão matinal, Protetor!"
            : "Plantão da tarde, Protetor!"
            
}

if (saudacao) {
    saudacao.textContent =
        hora > 19
            ? "Plantão noturno, Protetor!"
            : "Plantão da tarde, Protetor!"
            
}

const bannerAdocao = document.querySelector(" #banner-adocao")
bannerAdocao.addEventListener("mouseenter", () => {
    bannerAdocao.style.backgroundColor = "#ff0707"
})

bannerAdocao.addEventListener("mouseleave", () => {
    bannerAdocao.style.backgroundColor = "#29ef06"
})


const inputIdade = document.querySelector("#idade-pet");
const resultadoIdade = document.querySelector("#idade-humana ");

if (inputIdade && resultadoIdade) {
  inputIdade.addEventListener("input", () => {
    
    const mult = Number(inputIdade.value);

   
    const totalIdade = mult * 7;

  
    resultadoIdade.textContent = totalIdade;
  });
}


// listar novos 

// limpar

const botaoReset = document.querySelector("#btn-limpar")


botaoReset.addEventListener("click", () => {
    
    curtidas = 0// contador zerado
    mult.textContent = curtidas

    campo.value = ""// limpar campo do texto
    preview.textContent = ""
})


// segunda forma 

// const inputIdade = document.querySelector("#idade-pet");
// const resultadoIdade = document.querySelector("#txt-resultado strong");

// if (inputIdade && resultadoIdade) {
//   inputIdade.addEventListener("input", () => {
   
//     const idade_mult = Number(input.value);

//     const totalIdade = idade_mult * 7;

//     // Atualiza o ecrã com o resultado
//     resultadoIdade.textContent = totalIdade;
//   });
// }