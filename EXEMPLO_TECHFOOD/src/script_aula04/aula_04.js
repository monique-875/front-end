class Prato{
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }
    exbirComoMoeda(total){
        return "R$" + total.toFixed(2)

    }

}
const lasanha = new Prato("Lasanha Bolonhesa", 45.00)


alert("Seja bem vindonao restaurante Sabor e Saber!")

console.log("Teste")

const cliente = prompt("Bem vindo cliente, para um atendiento personalisado, digite seu nome:")

let nomeFormatado = cliente.trim().toUpperCase() // NOME APARECE EM CAPSLOKE e tirar esoaços

alert("Bem vindo: " + nomeFormatado)
//alert(`Bem vindo: ${nomeFormatado}`)



const horaAtual = new Date()

const hora = horaAtual.getHours()

if(hora < 11){
    alert(`Bom dia, ${nomeFormatado}, aproveite as delicias do café da manhã`)
}else{
    alert(`Boa tarde, ${nomeFormatado}, aproveite as iguarias do almoço`)
    console.log("Depois das onze horas")

}

const querPrato = confirm(`Meu queridop cliente ${nomeFormatado} quer um prato?`)


if(querPrato){
    let quantidade = prompt("Hoje temos Lasanha Bolonhesa, quantas você quer?")
    let total = lasanha.preco * quantidade
    //alert(total)
    alert(`Muito bem! o seu total de ${lasanha.nome} é de: ${lasanha.exbirComoMoeda(total)}`)
}else{
    alert("Ok, obrigado pela visita,volte sempre!")
}
