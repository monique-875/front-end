// --- SELEÇÃO COM QUERY SELECTOR (O padrão moderno) ---

//  Busca  o h3 apenas dentro de um ID específico evitando pegar o h3 da Lasanha por engano.

const tituloNhoque = document.querySelector('#card-nhoque h3');

// 2. Selecionando múltiplos elementos: Todos os botões que têm a classe .btn-pedido
// Diferente do getElementsByClassName, este retorna uma NodeList (mais moderna que HTMLCollection)

const botoesCompra = document.querySelectorAll('.btn-pedido');

const terceiroCard = document.querySelector('.card:nth-child(3)')
console.log("1. mostrando o NHOQUE (pelo ID):", tituloNhoque)
console.log("2.quantidade de botôes pedido:", botoesCompra.length)
console.log("3.terceiro card de uma class:", terceiroCard)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')

saudacao.textContent =  hora < 18 ? "Bem - vindo, boa tarde!" : "Bem-vindo boa noite!"



const seuNome = document.querySelector('#nome')

seuNome.innerHTML = "Meu nome é <strong>Monique</strong>" // italico usa tag <em> , negrito <strong>

// Manipulando atributos
const imagemLasanha = document.querySelector('#foto-destaque')
const card_lasanha = document.querySelector('#card-lasanha')

// metodo novo para alterar o alt para produto esgotado//

//imagemLasanha.alt = "Produto esgotado"

//imagemLasanha.src = "./src/img_2/lasanha_frango.jpg"

// trazer funcionalidades do css//
tituloNhoque.style.color= "#00f050"


//MANIPULAÇÃO DE CLASSES  classList= .add()= adicionar, .remove(), .toggles(classList. )= se tem a classe tira se nao coloca//

card_lasanha.classList.add('em-promocao')















// ADICIONAIS //
// 3. Selecionando por atributo (Ex: pegar a imagem pelo 'alt')

const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

// 4. Selecionando o checkbox do menu pelo ID (Sintaxe de CSS #)

const checkMenu = document.querySelector('#bt_menu');


// --- EXEMPLOS PRÁTICOS PARA MOSTRAR AOS ALUNOS ---

console.log("=== TESTES COM QUERY SELECTOR ===");

// 5. Verificando o texto do elemento específico

if (tituloNhoque) {
    console.log("Título capturado:", tituloNhoque.innerText);
}

// 6. Manipulando a lista de botões (querySelectorAll)
// Podemos ver quantos botões existem na página

console.log("Quantidade de botões de pedido:", botoesCompra.length);

// 7. Pegando o primeiro botão da lista e mudando o texto via JS

if (botoesCompra.length > 0) {
    botoesCompra[0].textContent = "Comprar Agora!";
    console.log("Texto do primeiro botão alterado com sucesso.");
}

// 8. Seleção combinada (Descendente)
// Pega o preço (span) que está dentro do card de lasanha

const precoLasanha = document.querySelector('.card .preco');
console.log("Preço da Lasanha:", precoLasanha.innerText);

// 9. Verificando se o seletor falhou (Segurança para o código)

const elementoInexistente = document.querySelector('.classe-que-nao-existe');
console.log("Resultado de seletor inexistente:", elementoInexistente); // Retorna null