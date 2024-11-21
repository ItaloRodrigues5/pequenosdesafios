let score = 0;
let TempoRestante = 30;
let TempoIntervalo;
let RespostaCerta;
let acertosConsecutivos = 0; // Contador de acertos consecutivos

document.getElementById('startButton').addEventListener('click', IniciarJogo);
document.getElementById('EnviarAReposta').addEventListener('click', CheckarResposta);

function IniciarJogo() {
    score = 0; // Reinicia a pontuação
    acertosConsecutivos = 0; // Reinicia os acertos consecutivos
    document.getElementById('Resultado').innerText = '';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    ProximaPergunta();
}

function ProximaPergunta() {
    clearInterval(TempoIntervalo);
    TempoRestante = 30;
    document.getElementById('Temporizador').innerText = `Tempo restante: ${TempoRestante}s`;
    
    const Operacao = Math.random() < 0.5 ? '+' : '-';
    const num1 = Math.floor(Math.random() * 51);
    let num2;

    if (Operacao === '-') {
        num2 = Math.floor(Math.random() * (num1 + 1)); // Garante que num2 não seja maior que num1
    } else {
        num2 = Math.floor(Math.random() * 51);
    }

    RespostaCerta = Operacao === '+' ? num1 + num2 : num1 - num2;
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

function CheckarResposta() {
    const userAnswer = parseInt(document.getElementById('RespostaPergnta').value);
    
    if (userAnswer === RespostaCerta) {
        score += calcularScore(RespostaCerta);
        acertosConsecutivos++; // Incrementa os acertos consecutivos
        document.getElementById('Resultado').innerText = `Correto! Pontuação: ${score}`;
        
        setTimeout(ProximaPergunta, 1000); // Atraso de 1 segundo para que o usuário veja a pontuação
    } else {
        // Armazena a pontuação total e os acertos consecutivos no localStorage antes de redirecionar
        localStorage.setItem('pontuacaoTotal', score); 
        localStorage.setItem('acertosConsecutivos', acertosConsecutivos); 
        window.location.href = "pontuacao.html"; // Altere para o caminho correto da sua página de pontuação
    }
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
    if (Resultado >= 51 && Resultado <= 1000) return 150;
}