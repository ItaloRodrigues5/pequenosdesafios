// script.js

// Perguntas e respostas
const questions = [
    { question: "Qual é o animal que mia?", answer: "Gato" },
    { question: "Quantas pernas tem uma aranha?", answer: "Oito" },
    { question: "Como se chama o lugar onde os alunos aprendem com o professor?", answer: "Escola" },
    { question: "Qual é o nome do veículo que voa no céu e transporta pessoas?", answer: "Avião" },
    { question: "Que fruta é vermelha por fora, tem sementes e é doce?", answer: "Morango" },
    { question: "Qual é o som que as vacas fazem?", answer: "Muu" },
    { question: "Quantos dedos temos nas duas mãos?", answer: "Dez" },
    { question: "Como se chama o brinquedo que sobe e desce preso a uma corda?", answer: "Ioiô" },
    { question: "Qual é o nome do líquido que bebemos para matar a sede?", answer: "Água" },
    { question: "Qual é o nome do personagem famoso que tem orelhas redondas e vive na Disney?", answer: "Mickey" },
    { question: "Qual é o maior planeta do Sistema Solar?", answer: "Júpiter" },
    { question: "Que animal é conhecido por sua longa tromba e orelhas grandes?", answer: "Elefante" },
    { question: "Qual é a cor da grama?", answer: "Verde" },
    { question: "Quantos dias tem uma semana?", answer: "Sete" },
    { question: "Como se chama o som que os cães fazem?", answer: "Latido" },
    { question: "O que usamos nos pés para andar mais confortável na rua?", answer: "Sapatos" },
    { question: "Qual é o nome do astro que aparece à noite e ilumina o céu?", answer: "Lua" },
    { question: "Como se chama o local onde há muitos livros para emprestar ou ler?", answer: "Biblioteca" },
    { question: "Qual é o número que vem depois do nove?", answer: "Dez" },
    { question: "O que é usado para apagar algo escrito no papel?", answer: "Borracha" }
];

// Variáveis globais
let currentQuestionIndex;

// Função para sortear uma pergunta aleatória
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestionIndex = randomIndex;
    document.getElementById("question").innerText = questions[randomIndex].question;
}

// Função para verificar a resposta
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    const resultDiv = document.getElementById("result");
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        resultDiv.innerText = 'Correto! 🎉';
    } else {
        resultDiv.innerText = `Errado! A resposta correta é "${correctAnswer}".`;
    }

    // Limpa a resposta do usuário
    document.getElementById("answer").value = '';
    
    // Sorteia uma nova pergunta
    getRandomQuestion();
}

// Inicializa o jogo
document.getElementById("submit").addEventListener("click", checkAnswer);
window.onload = getRandomQuestion;