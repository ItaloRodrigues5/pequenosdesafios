const perguntas = [
    {
        pergunta: "Qual é o resultado de 15 ÷ 3 + 4?",
        opcoes: ["9", "5", "7", "12"],
        resposta: "9",
        pontos: 10 // Pontos para esta pergunta
    },
    {
        pergunta: "Quantos minutos há em 2 horas e meia?",
        opcoes: ["120 minutos", "150 minutos", "180 minutos", "200 minutos"],
        resposta: "150 minutos",
        pontos: 20 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é o planeta mais próximo do Sol?",
        opcoes: ["Terra", "Vênus", "Mercúrio", "Marte"],
        resposta: "Mercúrio",
        pontos: 30 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é a principal função do pulmão no corpo humano?",
        opcoes: ["Bombear sangue", "Filtrar toxinas", "Absorver nutrientes", "Trocar gases (absorção de oxigênio e liberação de gás carbônico)"],
        resposta: "Trocar gases (absorção de oxigênio e liberação de gás carbônico)",
        pontos: 40 // Pontos para esta pergunta
    },
    {
        pergunta: "Quem descobriu o Brasil em 1500?",
        opcoes: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães"],
        resposta: "Pedro Álvares Cabral",
        pontos: 50 // Pontos para esta pergunta
    },
    {
        pergunta: "Em que ano ocorreu a Independência do Brasil?",
        opcoes: ["1492", "1808", "1822", "1889"],
        resposta: "1822",
        pontos: 10 // Pontos para esta pergunta
    },
    {
        pergunta: "O que foi o Período Regencial no Brasil?",
        opcoes: ["O tempo em que o Brasil foi colônia de Portugal",
                  "O intervalo entre os reinados de D. Pedro I e D. Pedro II",
                  "O período de escravidão no país",
                  "O tempo em que o Brasil foi uma república parlamentarista"],
        resposta: "O intervalo entre os reinados de D. Pedro I e D. Pedro II",
        pontos: 20 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual foi o principal motivo da Revolução Industrial?",
        opcoes: ["A busca por mais terras para agricultura",
                  "A substituição do trabalho manual pelo trabalho mecanizado",
                  "A independência das colônias europeias",
                  "O aumento do comércio marítimo"],
        resposta: "A substituição do trabalho manual pelo trabalho mecanizado",
        pontos: 30 // Pontos para esta pergunta
    },
    {
        pergunta: "Quem liderou a Revolução Francesa?",
        opcoes: ["Napoleão Bonaparte",
                  "Luís XVI",
                  "Robespierre",
                  "Voltaire"],
        resposta: "Robespierre",
        pontos: 40 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é a técnica artística usada para pintar na parede, como na Capela Sistina?",
        opcoes: ["Escultura",
                  "Fresco",
                  "Gravura",
                  "Acrílico"],
        resposta: "Fresco",
        pontos: 50 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é o movimento artístico que deu destaque às formas geométricas e cores vibrantes, como no trabalho de Picasso?",
        opcoes: ["Impressionismo",
                  "Surrealismo",
                  "Cubismo",
                  "Barroco"],
        resposta: "Cubismo",
        pontos: 10 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é o maior continente em extensão territorial?",
        opcoes: ["África",
                  "Ásia",
                  "América",
                  "Europa"],
        resposta: "Ásia",
        pontos: 20 // Pontos para esta pergunta
    },
    {
        pergunta: "Qual é o maior bioma do Brasil?",
        opcoes: ["Cerrado",
                  "Amazônia",
                  "Caatinga",
                  "Pantanal"],
        resposta: "Amazônia",
        pontos: 30 // Pontos para esta pergunta
    },
   {
      pergunta:"Qual é a tradução da palavra 'house'?",
      opcoes:["Carro","Casa","Escola","Janela"],
      resposta:"Casa",
      pontos:40 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual é a forma plural de 'child'?",
      opcoes:["Childs","Children","Childes","Childing"],
      resposta:"Children",
      pontos :50 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual é o verbo correto para completar:'She ___ a book every week'?",
      opcoes:["Read","Reads","Reading","To read"],
      resposta:"Reads",
      pontos :10 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual é o oposto de 'hot'?",
      opcoes:["Warm","Cold","Light","Wet"],
      resposta:"Cold",
      pontos :20 // Pontos para esta pergunta
   },
   {
      pergunta:"Complete:'I ___ to school by bus.'",
      opcoes:["Go","Goes","Going","Went"],
      resposta:"Go",
      pontos :30 // Pontos para esta pergunta
   },
   {
      pergunta:"Qual artista pintou a obra 'Mona Lisa'?",
      opcoes:["Michelangelo","Leonardo da Vinci","Vincent van Gogh","Pablo Picasso"],
      resposta:"Leonardo da Vinci",
      pontos :40 // Pontos para esta pergunta
   },
   {
      pergunta:"O que é o 'Impressionismo'?",
      opcoes:["Um movimento artístico que enfatiza emoções intensas e cenas sombrias",
                "Um estilo de arte que foca em representar a luz e as cores em diferentes momentos do dia",
                "Uma técnica de escultura que utiliza mármore",
                "Uma forma de pintura usada apenas em igrejas medievais"],
      resposta:"Um estilo de arte que foca em representar a luz e as cores em diferentes momentos do dia",
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

function verificarResposta(opcaoSelecionada){
	const perguntaAtual = perguntas[indicePerguntaAtual];
	const respostaCorreta = perguntaAtual.resposta;

	if (opcaoSelecionada === respostaCorreta){
		pontuacaoTotal += perguntaAtual.pontos; // Adiciona os pontos à pontuação total
		alert("Resposta correta! Você ganhou "+perguntaAtual.pontos+" pontos.");
		indicePerguntaAtual++;
		if (indicePerguntaAtual < perguntas.length){
			carregarPergunta();
		} else{
			alert("Parabéns! Você completou todas as perguntas.\nSua pontuação total é "+pontuacaoTotal+" pontos.");
		}
	} else{
		alert("Resposta incorreta! Tente novamente.");
	}
	document.getElementById("score").innerText = `Pontuação Total : ${pontuacaoTotal}`; // Atualiza a pontuação exibida
}

carregarPergunta(); // Carrega a primeira pergunta