const perguntas = [
    {
        pergunta: "Qual é o plural da palavra 'pão'?",
        opcoes: ["Pões", "Pães", "Pãos", "Pãezes"],
        resposta: "Pães",
        pontos: 10 // Pontos para esta pergunta
    },
    {
        pergunta: "O que é um sujeito na frase?",
        opcoes: ["O verbo da frase", "Quem pratica a ação", "O lugar onde ocorre a ação", "Um sinônimo de predicado"],
        resposta: "Quem pratica a ação",
        pontos: 20 // Pontos para esta pergunta
    },
    {
        pergunta: "Quanto é 8 x 7?",
        opcoes: ["54", "56", "64", "49"],
        resposta: "56",
        pontos: 30 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é a fração equivalente a 2/4?",
        opcoes: ["1/3", "1/2", "3/4", "2/3"],
        resposta: "1/2",
        pontos: 40 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é a função das raízes das plantas?",
        opcoes: ["Absorver luz", "Absorver água e nutrientes", "Produzir frutos", "Realizar fotossíntese"],
        resposta: "Absorver água e nutrientes",
        pontos: 50 // Pontos para esta pergunta
    },
    {
        pergunta: "O que é um herbívoro?",
        opcoes: ["Um animal que come carne", "Um animal que come plantas", "Um animal que come tudo", "Um animal que não come"],
        resposta: "Um animal que come plantas",
        pontos: 10 // Pontos para esta pergunta
    },
    {
        pergunta: "Quem descobriu o Brasil em 1500?",
        opcoes: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Américo Vespúcio"],
        resposta: "Pedro Álvares Cabral",
        pontos: 20 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual era o nome da primeira capital do Brasil?",
        opcoes: ["Brasília", "Salvador", "Rio de Janeiro", "Recife"],
        resposta: "Salvador",
        pontos: 30 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual artista pintou a obra 'Mona Lisa'?",
        opcoes: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Picasso"],
        resposta: "Leonardo da Vinci",
        pontos: 40 // Pontos para esta pergunta
    },
    {
        pergunta: "O que é uma melodia?",
        opcoes: ["Uma sequência de notas musicais", "O ritmo de uma música", "A letra de uma música", "O som dos instrumentos"],
        resposta: "Uma sequência de notas musicais",
        pontos: 50 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é o maior país do mundo em território?",
        opcoes: ["China", "Rússia", "Brasil", "Canadá"],
        resposta: "Rússia",
        pontos: 10 // Pontos para esta pergunta
    },
    {
        pergunta: "O que são as linhas imaginárias que dividem o globo terrestre?",
        opcoes: ["Rios", "Paralelos e meridianos", "Cordilheiras", "Longitudes"],
        resposta: "Paralelos e meridianos",
        pontos: 20 // Pontos para esta pergunta
    },
    {
        pergunta: 'Como se diz “gato” em inglês?',
        opcoes: ["Dog", "Cat", "Fish", "Bird"],
        resposta: 'Cat',
        pontos :30 // Pontos para esta pergunta
   },
   {
      pergunta:'Qual é a tradução de “How are you?”',
      opcoes:["Quem é você?", "Como você está?", 
              'O que você está fazendo?', 'Onde você está?'],
      resposta:'Como você está?',
      pontos :40 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual é o planeta mais próximo do Sol?",
      opcoes:["Terra","Mercúrio","Vênus","Marte"],
      resposta:"Mercúrio",
      pontos :50 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual é a fórmula química da água?",
      opcoes:["CO2","H2O","NaCl","O2"],
      resposta:"H2O",
      pontos :10 // Pontos para esta pergunta
   },
   {
      pergunta:"Quantos continentes existem no mundo?",
      opcoes:["5","6","7","8"],
      resposta:"7",
      pontos :20 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual é o maior mamífero do mundo?",
      opcoes:["Elefante","Baleia-azul","Rinoceronte","Girafa"],
      resposta:"Baleia-azul",
      pontos :30 // Pontos para esta pergunta
   },
   {
      pergunta:"Em que ano o homem pisou na Lua pela primeira vez?",
      opcoes:["1959","1969","1979","1989"],
      resposta:"1969",
      pontos :40 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual é o nome do gás que respiramos?",
      opcoes:["Dióxido de carbono","Oxigênio","Nitrogênio","Hélio"],
      resposta:"Oxigênio",
      pontos :50 // Pontos para esta pergunta
   }
];

let indicePerguntaAtual = 0;
let pontuacaoTotal = 0; // Variável para armazenar a pontuação total

function carregarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    
    document.getElementById("question").innerText = perguntaAtual.pergunta;

    const containerOpcoes = document.getElementById("options");
    containerOpcoes.innerHTML = ""; // Limpa opções anteriores

    perguntaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("div");
        
		botao.classList.add("option");
		botao.innerText = opcao; // Exibe apenas o texto da opção
        
		botao.onclick = () => verificarResposta(opcao);
        
		containerOpcoes.appendChild(botao);
	});
}

function verificarResposta(opcaoSelecionada) {
	const perguntaAtual = perguntas[indicePerguntaAtual];
	const respostaCorreta = perguntaAtual.resposta;

	if (opcaoSelecionada === respostaCorreta) {
		pontuacaoTotal += perguntaAtual.pontos; // Adiciona os pontos à pontuação total
		alert("Resposta correta! Você ganhou "+perguntaAtual.pontos+" pontos.");
		indicePerguntaAtual++;
		if (indicePerguntaAtual < perguntas.length) {
			carregarPergunta();
		} else {
			alert("Parabéns! Você completou todas as perguntas.\nSua pontuação total é "+pontuacaoTotal+" pontos.");
		}
	} else {
		alert("Resposta incorreta! Você será redirecionado para a tela de pontuação.");
        
		// Redireciona para a tela de pontuação com os pontos acumulados
		window.location.href = 'pontuacao.html?pontos=' + pontuacaoTotal; // Altere 'tela_pontuacao.html' conforme necessário.
	}
	document.getElementById("score").innerText = `Pontuação Total : ${pontuacaoTotal}`; // Atualiza a pontuação exibida
}

carregarPergunta(); // Carrega a primeira pergunta