/* ==========================================
   Patas & Cia - Script principal
   Interatividade: menu, contadores, serviços,
   depoimentos e validação do formulário.
   ========================================== */

/* ---------- Menu hambúrguer (mobile) ---------- */
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");

// Abre e fecha o menu ao clicar no botão
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
  const aberto = menu.classList.contains("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});

// Fecha o menu ao clicar em qualquer link (útil no celular)
const linksMenu = document.querySelectorAll("#menu a");
for (let i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
}

/* ---------- Contadores animados da seção Sobre ---------- */
let contadoresJaAnimados = false;

function animarContadores() {
  const contadores = document.querySelectorAll(".contador");

  for (let i = 0; i < contadores.length; i++) {
    const elemento = contadores[i];
    const alvo = Number(elemento.dataset.alvo);
    const usaDecimal = elemento.dataset.decimal === "sim";
    let valorAtual = 0;
    // Incremento calculado para a animação durar cerca de 1 segundo
    const passo = Math.ceil(alvo / 50);

    const intervalo = setInterval(function () {
      valorAtual = valorAtual + passo;
      if (valorAtual >= alvo) {
        valorAtual = alvo;
        clearInterval(intervalo);
      }
      if (usaDecimal) {
        // 49 vira "4.9" (nota média)
        elemento.textContent = (valorAtual / 10).toFixed(1);
      } else {
        elemento.textContent = valorAtual.toLocaleString("pt-BR");
      }
    }, 20);
  }
}

// Dispara a animação quando a seção Sobre aparece na tela
window.addEventListener("scroll", function () {
  if (contadoresJaAnimados) {
    return;
  }
  const secaoSobre = document.querySelector("#sobre");
  const posicao = secaoSobre.getBoundingClientRect();
  if (posicao.top < window.innerHeight - 100) {
    contadoresJaAnimados = true;
    animarContadores();
  }
});

/* ---------- Seção de Serviços: cards gerados via array ---------- */
const servicos = [
  {
    nome: "Banho e Tosa",
    descricao: "Banho com produtos hipoalergênicos, tosa higiênica ou completa e finalização perfumada.",
    preco: "R$ 60",
    icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.5" y1="8.5" x2="20" y2="20"/><line x1="8.5" y1="15.5" x2="20" y2="4"/></svg>'
  },
  {
    nome: "Consulta Veterinária",
    descricao: "Atendimento clínico com veterinários experientes, do filhote ao idoso.",
    preco: "R$ 120",
    icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 3v5a5 5 0 0 0 10 0V3"/><path d="M10 13v3a4 4 0 0 0 8 0v-2"/><circle cx="18" cy="12" r="2"/></svg>'
  },
  {
    nome: "Vacinação",
    descricao: "Calendário completo de vacinas com registro na carteirinha do pet.",
    preco: "R$ 90",
    icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="21" x2="8" y2="16"/><rect x="8" y="9" width="8" height="8" rx="1" transform="rotate(45 12 13)"/><line x1="15" y1="4" x2="20" y2="9"/><line x1="18" y1="2" x2="22" y2="6"/></svg>'
  },
  {
    nome: "Pet Táxi",
    descricao: "Buscamos e levamos seu pet com segurança e conforto, sem estresse.",
    preco: "R$ 25",
    icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14l2-6h14l2 6v5h-3v-2H6v2H3z"/><circle cx="7" cy="16" r="1"/><circle cx="17" cy="16" r="1"/></svg>'
  },
  {
    nome: "Hotelzinho",
    descricao: "Hospedagem com recreação, câmeras ao vivo e muito carinho da equipe.",
    preco: "R$ 80",
    icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>'
  },
  {
    nome: "Loja de Produtos",
    descricao: "Rações premium, petiscos, brinquedos e acessórios selecionados.",
    preco: "R$ 15",
    icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>'
  }
];

// Percorre o array e cria um card para cada serviço
function montarServicos() {
  const lista = document.querySelector("#lista-servicos");

  for (let i = 0; i < servicos.length; i++) {
    const servico = servicos[i];
    const card = document.createElement("article");
    card.className = "card-servico";
    card.innerHTML =
      '<div class="card-icone">' + servico.icone + '</div>' +
      '<h3>' + servico.nome + '</h3>' +
      '<p>' + servico.descricao + '</p>' +
      '<span class="card-preco">a partir de <strong>' + servico.preco + '</strong></span>';
    lista.appendChild(card);
  }
}

montarServicos();

/* ---------- Carrossel de depoimentos ---------- */
const depoimentos = [
  {
    texto: "Meu golden sai de lá cheiroso e feliz. Dá pra ver que cuidam com amor de verdade!",
    nome: "Mariana Souza",
    pet: "tutora do Thor",
    foto: "img/depoimento-1.jpg"
  },
  {
    texto: "A consulta foi super atenciosa e o pet táxi salvou minha rotina. Recomendo de olhos fechados.",
    nome: "Carlos Lima",
    pet: "tutor da Mel",
    foto: "img/depoimento-2.jpg"
  },
  {
    texto: "Deixei minha gata no hotelzinho e recebi fotos todos os dias. Confiança total na equipe!",
    nome: "Fernanda Alves",
    pet: "tutora da Luna",
    foto: "img/depoimento-3.jpg"
  }
];

let indiceAtual = 0;

// Atualiza o card com o depoimento do índice recebido
function mostrarDepoimento(indice) {
  const depoimento = depoimentos[indice];
  document.querySelector("#depoimento-texto").textContent = depoimento.texto;
  document.querySelector("#depoimento-nome").textContent = depoimento.nome;
  document.querySelector("#depoimento-pet").textContent = depoimento.pet;
  const foto = document.querySelector("#depoimento-foto");
  foto.src = depoimento.foto;
  foto.alt = "Foto de " + depoimento.nome;
}

document.querySelector("#botao-anterior").addEventListener("click", function () {
  indiceAtual = indiceAtual - 1;
  // Se passou do início, volta para o último
  if (indiceAtual < 0) {
    indiceAtual = depoimentos.length - 1;
  }
  mostrarDepoimento(indiceAtual);
});

document.querySelector("#botao-proximo").addEventListener("click", function () {
  indiceAtual = indiceAtual + 1;
  // Se passou do fim, volta para o primeiro
  if (indiceAtual >= depoimentos.length) {
    indiceAtual = 0;
  }
  mostrarDepoimento(indiceAtual);
});

// Mostra o primeiro depoimento assim que a página carrega
mostrarDepoimento(0);

/* ---------- Validação do formulário de contato ---------- */

// Escreve (ou limpa) a mensagem de erro de um campo
function definirErro(idCampo, mensagem) {
  const campo = document.querySelector("#" + idCampo);
  const erro = document.querySelector("#erro-" + idCampo);
  erro.textContent = mensagem;
  if (mensagem === "") {
    campo.classList.remove("campo-invalido");
  } else {
    campo.classList.add("campo-invalido");
  }
}

// Verificação simples de e-mail: precisa ter "@" e "." depois do "@"
function emailValido(email) {
  const posicaoArroba = email.indexOf("@");
  const posicaoPonto = email.lastIndexOf(".");
  return posicaoArroba > 0 && posicaoPonto > posicaoArroba + 1 && posicaoPonto < email.length - 1;
}

// Conta quantos dígitos existem no telefone (ignora parênteses, traço e espaço)
function contarDigitos(texto) {
  let total = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= "0" && texto[i] <= "9") {
      total = total + 1;
    }
  }
  return total;
}

function validarFormulario(evento) {
  // Impede o envio real: a validação acontece só no front-end
  evento.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  const telefone = document.querySelector("#telefone").value.trim();
  const mensagem = document.querySelector("#mensagem").value.trim();
  const sucesso = document.querySelector("#mensagem-sucesso");
  let formularioValido = true;

  // Campo nome: obrigatório
  if (nome === "") {
    definirErro("nome", "Por favor, informe seu nome.");
    formularioValido = false;
  } else {
    definirErro("nome", "");
  }

  // Campo e-mail: obrigatório e com formato válido
  if (email === "") {
    definirErro("email", "Por favor, informe seu e-mail.");
    formularioValido = false;
  } else if (!emailValido(email)) {
    definirErro("email", "Digite um e-mail válido, como nome@email.com.");
    formularioValido = false;
  } else {
    definirErro("email", "");
  }

  // Campo telefone: opcional, mas se preenchido precisa ter ao menos 10 dígitos
  if (telefone !== "" && contarDigitos(telefone) < 10) {
    definirErro("telefone", "Digite um telefone com DDD, ex: (48) 99999-0000.");
    formularioValido = false;
  } else {
    definirErro("telefone", "");
  }

  // Campo mensagem: obrigatório
  if (mensagem === "") {
    definirErro("mensagem", "Escreva uma mensagem para a gente.");
    formularioValido = false;
  } else {
    definirErro("mensagem", "");
  }

  if (formularioValido) {
    sucesso.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato. 🐾";
    document.querySelector("#form-contato").reset();
  } else {
    sucesso.textContent = "";
  }
}

document.querySelector("#form-contato").addEventListener("submit", validarFormulario);
