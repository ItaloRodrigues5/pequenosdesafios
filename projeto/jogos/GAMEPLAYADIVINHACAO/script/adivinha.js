// script.js

// Perguntas e respostas
const perguntas = [
    { pergunta: "Qual é o animal que mia?", resposta: "Gato" },
    { pergunta: "Quantas pernas tem uma aranha?", resposta: "Oito" },
    { pergunta: "Como se chama o lugar onde os alunos aprendem com o professor?", resposta: "Escola" },
    { pergunta: "Qual é o nome do veículo que voa no céu e transporta pessoas?", resposta: "Avião" },
    { pergunta: "Que fruta é vermelha por fora, tem sementes e é doce?", resposta: "Morango" },
    { pergunta: "Qual é o som que as vacas fazem?", resposta: "Muu" },
    { pergunta: "Quantos dedos temos nas duas mãos?", resposta: "Dez" },
    { pergunta: "Como se chama o brinquedo que sobe e desce preso a uma corda?", resposta: "Ioiô" },
    { pergunta: "Qual é o nome do líquido que bebemos para matar a sede?", resposta: "Água" },
    { pergunta: "Qual é o nome do personagem famoso que tem orelhas redondas e vive na Disney?", resposta: "Mickey" },
    { pergunta: "Qual é o maior planeta do Sistema Solar?", resposta: "Júpiter" },
    { pergunta: "Que animal é conhecido por sua longa tromba e orelhas grandes?", resposta: "Elefante" },
    { pergunta: "Qual é a cor da grama?", resposta: "Verde" },
    { pergunta: "Quantos dias tem uma semana?", resposta: "Sete" },
    { pergunta: "Como se chama o som que os cães fazem?", resposta: "Latido" },
    { pergunta: "O que usamos nos pés para andar mais confortável na rua?", resposta: "Sapatos" },
    { pergunta: "Qual é o nome do astro que aparece à noite e ilumina o céu?", resposta: "Lua" },
    { pergunta: "Como se chama o local onde há muitos livros para emprestar ou ler?", resposta: "Biblioteca" },
    { pergunta: "Qual é o número que vem depois do nove?", resposta: "Dez" },
    { pergunta: "O que é usado para apagar algo escrito no papel?", resposta: "Borracha" }
];

// Variáveis globais
let indicePerguntaAtual;
let timerId;
let tempoRestante;
const TEMPO_LIMITE = 40; // Tempo limite em segundos
let pontuacao = 0; // Inicializa a pontuação

// Função para sortear uma pergunta aleatória
function obterPerguntaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * perguntas.length);
    indicePerguntaAtual = indiceAleatorio;
    document.getElementById("pergunta").innerText = perguntas[indiceAleatorio].pergunta;

    // Inicia ou reinicia o temporizador
    iniciarTemporizador();
}

// Função para iniciar o temporizador
function iniciarTemporizador() {
    clearTimeout(timerId); // Limpa qualquer temporizador anterior
    tempoRestante = TEMPO_LIMITE;

    const divTempo = document.getElementById("tempo");
    
    divTempo.innerText = `Tempo restante: ${tempoRestante} segundos`; // Exibe tempo inicial

    timerId = setInterval(() => {
        tempoRestante--;
        divTempo.innerText = `Tempo restante: ${tempoRestante} segundos`; // Atualiza a contagem

        if (tempoRestante <= 0) {
            clearInterval(timerId);
            const divResultado = document.getElementById("resultado");
            divResultado.innerText = 'Tempo esgotado! A resposta correta era "' + perguntas[indicePerguntaAtual].resposta + '".';
            document.getElementById("resposta").value = ''; // Limpa a entrada do usuário
            obterPerguntaAleatoria(); // Sorteia uma nova pergunta
        }
    }, 1000); // Atualiza a cada segundo
}

// Função para verificar a resposta
function verificarResposta() {
    const respostaUsuario = document.getElementById("resposta").value.trim();
    const respostaCorreta = perguntas[indicePerguntaAtual].resposta;

    const divResultado = document.getElementById("resultado");
    
    clearInterval(timerId); // Para o temporizador ao responder

    if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
        pontuacao += 10; // Adiciona pontos ao jogador
        divResultado.innerText = 'Correto! 🎉';
        document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`; // Atualiza a exibição da pontuação
        setTimeout(obterPerguntaAleatoria, 2000); // Espera 2 segundos antes de mostrar nova pergunta
    } else {
        divResultado.innerText = `Errado! A resposta correta é "${respostaCorreta}".`;
        setTimeout(obterPerguntaAleatoria, 2000); // Espera 2 segundos antes de mostrar nova pergunta
    }

    // Limpa a resposta do usuário
    document.getElementById("resposta").value = '';
}

// Inicializa o jogo
document.getElementById("enviar").addEventListener("click", verificarResposta);
window.onload = obterPerguntaAleatoria;
