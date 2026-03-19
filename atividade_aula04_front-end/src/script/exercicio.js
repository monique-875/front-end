
// exercicio 1

const nome = prompt(`Bem vindo! digite seu nome para eu te conhecer!`)
const sobrenome = prompt("Bem vindo! digite seu sobrenome  para eu te conhecer!")

let nomeCompleto = nome + " " + sobrenome;

alert(`Muito prazer${nomeCompleto.trim().toLowerCase()} `)
alert(`Seu nome possui: ${nomeCompleto.length} caracters `);

// VERSÃO DO PROFESSOR!

let nome2 = prompt("Nome:").trim() // remove o espaço entre os nomes
let sobrenome2 = prompt("Sobrenome: ").trim()
let completo = nome2 +" " + sobrenome2

// Nome completo em minusculo
alert(completo.toUpperCase())

//Maiusculas

alert(completo.toUpperCase())

//conta o numero de caracteres
alert(completo.length)

// Com o Concat -para contar,qualtidades grandes ao inves de usar let completo = nome2 +" " + sobrenome2
let nomeCompleto2 = nome.concat(" ", sobrenome2 [28])
alert(nomeCompleto2)

//Sem concat 

alert(completo)

// Calculadora de Divisão de Conta (Aritméticos)

const valor = prompt(`Quanto deu a sua conta? digite o valor dela para realizar o pagamento`)

const quantidade = prompt(`digite a qauntidade de pessoas presentes na mesa`)
let valorFinal = valor / quantidade
alert(`Cada um deve pagar R$ ${valorFinal.toFixed(2)}`)


// VERSÃO DO PROFESSOR

let totalConta =  ("Digite o total da conta: ")
let qtdPessoas = prompt("Digite a qunatidade de pessoas: ")

let totalPessoa = totalConta / qtdPessoas

alert("Cada amigo deve pagar R$:" +totalPessoa.toFixed(2))
alert(`Cada um deve pagar R$ ${totalPessoa.toFixed(2)}`)

//Exercício 3: Validador de Promoção (Lógicos e Relacionais)

const valorCompra  = prompt(`qual o valor da sua compra?`)
const resposta = prompt (` Voce possui cupom? (sim/nao)`)

if (valorCompra > 150 || resposta == "sim") {
    console.log("Frete Grátis Liberado");
} else {
    console.log("Frete Pago");
}

//VERSAO DO PROFESSOR

let valorCompra2 = prompt ("Digite o valor da compra: ")

let cupom =  confirm("Se voce possui cupom clique em -ok- Senão clique em - Cancelar-")

let resposta2 = valorCompra2 > 150 || cupom ==true ? "Tem frete pago" :"Não tem frete pago"

console.log(resposta2)


// let cupom = prompt ("Tem cupom? (Digite Sim ou Não)").toLowerCase.trim()

// if (valorCompra2 > 150 || cupom == "sim"){
//     console.log("Frete gratis")
// }else{
//     console.log("Frete precisa ser pago")
// }// Versão longa


// Exercício 4: Sorteador de Brindes (Math)

let num = prompt("Escolha de 1 a 10:");
let numAleatorio = Math.floor(Math.random() * 10) + 1;//ramdom tras um numero aleatorio
if (num == numAleatorio) {
    alert("Parabéns, você ganhou um brinde! Uhuuu");
} else {
    alert(`Que pena você não ganhou, o número sorteado foi ${numAleatorio} `);
}

//VERSÃO DO PROFESSOR

let userNum = Number(prompt("Escolha de 1 a 10:"));
let numeroSorteado = Math.floor(Math.random() * 10) + 1;
if (userNum === numeroSorteado) {
    alert("Parabéns, você ganhou a tao sonhada caiza de bis do celso! Uhuuu");
} else {
    alert("Que pena você não ganhou " + numeroSorteado);

}
let premio =  userNum == numeroSorteado? " Parabens ganhou 10 bis": "Que pena voce nao ganhou"

//  Gestão de Frota (Orientação a Objetos)

class Veiculo {
    constructor(modelo, marca , ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    idadeVeiculo(anoAtual) {
        return anoAtual - this.ano;
    }
}
const meuCarro = new Veiculo("Corolla", "Toyota", 2020);
let anoHj = prompt("Em que ano estamos?");
alert("O " + meuCarro.modelo + " tem " + meuCarro.idadeVeiculo(anoHj) + " anos.");


// VERSÃO DO PROFESSOR

class Veiculo1 {
    constructor(modelo, marca , ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    idadeVeiculo1(anoAtual) {
        return anoAtual - this.ano
    }
}
const meuCarro1 = new Veiculo1("Corolla", "Toyota", 2020);
// let anoAt = prompt("Em que ano estamos?");
// alert("O " + meuCarro1.modelo + " tem " + meuCarro1.idadeVeiculo1(anoAt) + " anos.");

let data = new Date()
let anoAtual = data.getFullYear()

alert("O " + meuCarro1.modelo + " tem " + meuCarro1.idadeVeiculo1(anoAt) + " anos.");





