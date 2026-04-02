document.querySelector("#nome-usuario").textContent =
  "Monique Juliane da Silva Fonseca"; /*document.querySelector("#nome-usuario") seleciona o elemento do HTML que tem o id nome-usuario e o textContent altera o texto dentro desse elemento*/

document.querySelector("#foto-perfil").src =
  "https://th.bing.com/th/id/OIP.chHRUUt7DqQVKoxFcapdJAHaLH";

document.querySelector("#container-perfil").style.backgroundColor =
  "lightblue"; /*Seleciona o container do perfil

.style.backgroundColor altera a cor de fundo via CSS*/

document
  .querySelector("#badge-status")
  .classList.add(
    "online",
  ); /*Seleciona o elemento de status/ .classList.add("online") -  adiciona a classe CSS "online"*/

document.querySelector("#badge-status").textContent =
  "Status: Ativo"; /*document.querySelector("#badge-status") seleciona o elemento que tem o id badge-status/.textContent = "Status: Ativo" altera o texto dentro desse elemento.*/

console.log(
  "Total de skills:",
  document.querySelectorAll(".skill").length,
); /*document.querySelectorAll(".skill") seleciona todos os elementos que têm a classe skill/ .length conta quantos elementos foram encontrados. /console.log imprime essa informação no console do navegador.*/
