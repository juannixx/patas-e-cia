# Patas & Cia - Landing Page

🇺🇸 [Read in English](./README.md)

## Identificação
- Projeto: Landing page de pet shop fictício (Desafio Extra C2)
- Curso: Introdução à Programação Front-End e Back-End (SCTEC / SENAI-SC)
- Autor: Juan de Oliveira e Silva

## Sobre o projeto
A Patas & Cia é uma marca fictícia que criei para este desafio: um pet shop de bairro em Florianópolis, com banho e tosa, consultas veterinárias, hotelzinho e uma lojinha de produtos. Não existe de verdade, mas tentei construir a página como se fosse um cliente real, pensando em como uma pessoa chegaria no site pelo celular ou pelo computador e decidiria (ou não) agendar um horário.

O objetivo comercial da página é bem direto: apresentar os serviços, passar confiança através dos números da seção "Quem somos" e dos depoimentos de clientes, e levar a pessoa até o formulário de contato ou o WhatsApp. Por isso os dois botões de destaque na hero (agendar banho e ver serviços) e o botão flutuante de WhatsApp aparecem em vários pontos da rolagem, não só no topo.

Para o conceito visual, optei por uma paleta em tons de laranja queimado e creme, com um marrom escuro para o texto no lugar do preto puro. A ideia era transmitir algo acolhedor e "de bairro", diferente da estética mais fria e corporativa que às vezes aparece em sites de serviço. As fontes (Baloo 2 para títulos e Nunito para o texto) seguem essa mesma linha: a primeira é mais arredondada e amigável, a segunda é limpa e fácil de ler em blocos maiores de texto.

## Etapas de desenvolvimento
1. **Planejamento da identidade visual**: escolhi o nome, a paleta de cores (variáveis CSS em `:root`) e as duas fontes do Google Fonts antes de escrever qualquer HTML de conteúdo.
2. **Estruturação do HTML semântico**: montei o `index.html` com as tags de seção pedidas pelo desafio (header, hero, sobre, serviços, depoimentos, contato, footer), usando `<section>`, `<nav>`, `<figure>` e `<blockquote>` onde fazia sentido em vez de `<div>` para tudo.
3. **Estilização com CSS**: apliquei Grid na seção Sobre e nos indicadores, Flexbox no cabeçalho e nos botões, `position: relative/absolute` na composição da imagem de destaque e `aspect-ratio` nos ícones dos cards de serviço. Os media queries de responsividade (768px e 1024px) foram feitos por último, seção por seção.
4. **Interatividade com JavaScript**: implementei o menu hambúrguer com `classList.toggle`, os contadores animados com `setInterval` disparados por scroll, os cards de serviço gerados por um laço `for` sobre um array de objetos, o carrossel de depoimentos com índice e "wrap" via `if`, e a validação do formulário sem usar expressões regulares.
5. **Testes de responsividade e revisão final**: testei a página redimensionando a janela e simulando telas de celular no navegador, ajustando alguns contrastes de cor e atributos `aria-*` que estavam fracos.

## Tecnologias e técnicas utilizadas
- **HTML5 semântico**: `header`, `nav`, `main`, `section`, `footer`, `figure`/`figcaption`, `blockquote`, formulário com `label` associado a cada campo.
- **CSS Grid**: na seção Sobre (`sobre-grade`, foto + texto em 2 colunas), nos indicadores animados (4 colunas), na grade de cards de serviço (3 colunas) e na seção de contato (informações + formulário).
- **Flexbox**: no cabeçalho (logo à esquerda, menu à direita), na hero (texto e imagem lado a lado) e nos botões de CTA.
- **`position: relative/absolute`**: é a técnica usada na imagem de destaque da hero. O contêiner `.hero-imagem` é o elemento de referência (`relative`) e o círculo de fundo, a foto do cachorro e o badge "+2.500 pets felizes" ficam posicionados de forma absoluta uns sobre os outros, controlados por `z-index`.
- **`aspect-ratio`**: usado no círculo dos ícones dos cards de serviço (`.card-icone`, proporção 1/1) e também no contêiner da imagem de destaque da hero, para que a composição não deforme em telas diferentes.
- **JavaScript sem frameworks**: menu com `classList`, contadores animados com `setInterval` acionados por um listener de `scroll` que verifica a posição da seção com `getBoundingClientRect`, cards de serviço montados em `for` a partir de um array de objetos (nome, descrição, preço e ícone SVG), carrossel de depoimentos com variável de índice e correção de limites via `if`, e validação de formulário no envio (`preventDefault`) sem regex: e-mail checado por posição de `@` e `.` com `indexOf`/`lastIndexOf`, telefone checado contando dígitos um a um.
- **Responsividade**: media queries em 768px (celular) e 1024px (tablet), com ajuste de colunas do Grid e do menu.
- **Acessibilidade**: contraste revisado em textos pequenos sobre fundo colorido (troquei laranja por marrom em alguns lugares), `aria-label` nos botões de ícone, `aria-expanded` no botão do menu e `aria-hidden` nos SVGs decorativos.

## Como executar
1. Extraia o arquivo compactado.
2. Abra o arquivo `index.html` em qualquer navegador moderno (duplo clique).
3. Não é necessário instalar nada, o projeto usa apenas HTML, CSS e JavaScript puros, sem dependências externas além das fontes do Google Fonts (carregadas via link no `head`).

## Estrutura de pastas
```
patas-e-cia/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── favicon.svg
    ├── hero-dog.png
    ├── sobre-equipe.jpg
    ├── depoimento-1.jpg
    ├── depoimento-2.jpg
    └── depoimento-3.jpg
```

As imagens de `img/` na entrega final são fotos geradas por IA (hero, equipe e depoimentos); os prompts usados para gerá-las ficam documentados fora desta pasta, em um arquivo separado que não faz parte do pacote entregue.
