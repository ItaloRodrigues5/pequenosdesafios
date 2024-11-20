let score = 0;
let TempoRestante = 30;
let TempoIntervalo;
let RespostaCerta;
const TEMPO_TOTAL = 30; // Tempo total para cada pergunta

document.getElementById('startButton').addEventListener('click', IniciarJogo);
document.getElementById('EnviarAReposta').addEventListener('click', CheckarResposta);

function IniciarJogo() {
    score = 0; // Reinicia a pontuação
    document.getElementById('Resultado').innerText = '';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    ProximaPergunta();
}

function ProximaPergunta() {
    clearInterval(TempoIntervalo);
    TempoRestante = TEMPO_TOTAL;
    document.getElementById('Temporizador').innerText = `Tempo restante: ${TempoRestante}s`;
    
    const Operacao = escolherOperacao(); // Função para escolher a operação
    let num1, num2;

    if (Operacao === '-') {
        num1 = Math.floor(Math.random() * 51);
        num2 = Math.floor(Math.random() * (num1 + 1)); // Garantir que num1 >= num2
    } else if (Operacao === '/') {
        num2 = Math.floor(Math.random() * 10) + 1; // Garantir que num2 não seja zero
        num1 = num2 * Math.floor(Math.random() * 11); // O numerador será um múltiplo do denominador (0 a 10)
    } else if (Operacao === '*') {
        num1 = Math.floor(Math.random() * 11); // Números de 0 a 10
        num2 = Math.floor(Math.random() * 11); // Números de 0 a 10
    } else {
        num1 = Math.floor(Math.random() * 51);
        num2 = Math.floor(Math.random() * (num1 + 1)); // Garantir que num1 >= num2
    }
    
    RespostaCerta = calcularResposta(num1, num2, Operacao);
    
    document.getElementById('Pergunta').innerText = `${num1} ${Operacao} ${num2} = ?`;
    
    TempoIntervalo = setInterval(() => {
        TempoRestante--;
        document.getElementById('Temporizador').innerText = `Tempo restante: ${TempoRestante}s`;
        
        if (TempoRestante <= 0) {
            clearInterval(TempoIntervalo);
            FimDeJogo(false); // Chama FimDeJogo se o tempo acabar
        }
    }, 1000);
}

function escolherOperacao() {
    const operacoes = ['+', '-', '*', '/'];
    return operacoes[Math.floor(Math.random() * operacoes.length)];
}

function calcularResposta(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function CheckarResposta() {
    const userAnswer = parseInt(document.getElementById('RespostaPergnta').value);
    
    if (userAnswer === RespostaCerta) {
        const bonusPoints = calcularBonus(TempoRestante);
        score += calcularScore(RespostaCerta) + bonusPoints; // Adiciona a pontuação base e o bônus
        document.getElementById('Resultado').innerText = `Correto! Pontuação: ${score}`;
        
        // Chama ProximaPergunta automaticamente após uma resposta correta
        setTimeout(ProximaPergunta, 1000); // Atraso de 1 segundo para que o usuário veja a pontuação
    } else {
        FimDeJogo(false); // Reinicia o jogo se a resposta estiver errada
    }
}

function calcularBonus(tempoRestante) {
    if (tempoRestante > 20) return 20;   // Bônus máximo se responder com mais de 20s restantes
    if (tempoRestante > 10) return 10;   // Bônus médio se responder com mais de 10s restantes
    return 0;                             // Sem bônus se restar menos de 10s
}

function FimDeJogo(EVitoria) {
    clearInterval(TempoIntervalo);
    
    if (EVitoria) {
        document.getElementById('Resultado').innerText += ' Você ganhou!';
    } else {
        document.getElementById('Resultado').innerText = `Você perdeu! Pontuação final: ${score}`;
        score = 0; // Reinicia a pontuação ao perder
        document.getElementById('startButton').style.display = 'block'; // Exibe o botão de iniciar
    }
    
    document.getElementById('jogo').style.display = 'none'; // Oculta a seção do jogo
}

function calcularScore(Resultado) {
    if (Resultado >= 0 && Resultado <= 5) return 8;
    if (Resultado >= 6 && Resultado <= 10) return 14;
    if (Resultado >= 11 && Resultado <= 20) return 30;
    if (Resultado >= 21 && Resultado <= 40) return 35;
    if (Resultado >= 41 && Resultado <= 50) return 100;
    if (Resultado >= 51 && Resultado <= 10000) return 150;
}