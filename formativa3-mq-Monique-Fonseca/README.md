GalaxyTours💻

Este é um projeto desenvolvido para a avaliação de Front-End, focado em criar interatividade para um projeto para uma agência de turismo espacial do mundo. O site principal foi desenhado para telas grandes (computadores), mas o CEO percebeu que 70% dos clientes tentam comprar passagens pelo celular e o layout está quebrando inteiro! Então foi desenvolvido um sistema pautado em media quers para solucionar o problema.

Tecnologias Utilizadas
HTML5 (Semântica e Acessibilidade)
CSS3 (Estilização e Feedback Visual.obs: com uso especial de media querys)
JavaScript (Manipulação de DOM e Eventos)

📁 Estrutura do Projeto
O projeto foi organizado seguindo boas práticas de mercado: 
/ ├── index.html 
└── src/ 
├── styles/ (Estilos da página) 
├── scripts/ (Lógica de interação) 
└── images/ (Ativos visuais)

Funcionalidades Implementadas:

Ponto de quebra para TABLETS:Largura máxima de 768px utilizando o @media screen and (max-width: 768px) .

Alteração de colunas: Alterar colunas na gride-pacotes para repetiri duas vezes atravez .grid-pacotes { grid-template-columns: 1fr 1fr;} (obs:dentro do media query do ponto de quebra).

Ponto de quebra para SMARTPHONES: Largura máxima de 480px atraves do @media screen and (max-width: 480px) 

Alteração de colunas: Alterar colunas na gride-pacotes  para coluna um atraves do .grid-pacotes {grid-template-columns: 1fr;}(obs: tudo dentro do media query de largura maxima 480)

Captura do HEADER: mude a direção do flex para coluna e centralize, usei o header{flex-direction: column;text-align: center;}(obs: tudo dentro do media query de largura maxima 480).

Desaparecer da tela:Capture a .dica-desktop e faça ela desaparecer da tela usando a propriedade de exibição apropriada, fiz atravez do .dica-desktop{display: none;} assim ele ocultará da tela o "bloco".

👨‍💻 Autor
Monique Juliane da Silva Fonseca