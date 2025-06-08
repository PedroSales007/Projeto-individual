const quizData = [
    {
        question: "Qual é o nome oficial do festival onde o jogo Forza Horizon 1 se passa?",
        options: ["A) Colorado Racing Festival", "B) Horizon Festival", "C) Forza Rally Championship", "D) Rocky Mountain GP"],
        answer: "B"
    },
    {
        question: "Qual carro é utilizado na corrida de introdução (prólogo) do Forza Horizon 1?",
        options: ["A) Nissan GT-R R35", "B) Lamborghini Gallardo LP570-4 Superleggera", "C) Chevrolet Corvette ZR1", "D) Dodge Viper SRT10 ACR"],
        answer: "B"
    },
    {
        question: "Qual destes fabricantes NÃO aparece com modelos jogáveis no Forza Horizon 1 base (sem DLC)?",
        options: ["A) Toyota", "B) Ferrari", "C) Koenigsegg", "D) Pagani"],
        answer: "A"
    },
    {
        question: "Em Forza Horizon 1, quantos níveis de pulseira (bracelet) existem que determinam o progresso do jogador?",
        options: ["A) 3", "B) 5", "C) 6", "D) 8"],
        answer: "C"
    },
    {
        question: "Qual a cidade fictícia central do mapa de Forza Horizon 1?",
        options: ["A) Redrock", "B) Carson", "C) Boulder", "D) Aspen"],
        answer: "A"
    },
    {
        question: "Qual é o nome do personagem que serve como principal rival do jogador durante a maior parte do jogo?",
        options: ["A) Ramona Cravache", "B) Darius Flynt", "C) Ben Green", "D) Dax Shepard"],
        answer: "B"
    },
    {
        question: "Em Forza Horizon 1, qual destes eventos é obrigatório para a progressão principal?",
        options: ["A) Speed Trap Challenge", "B) Showcase Events", "C) Horizon Outpost Time Trials", "D) Barn Find Races"],
        answer: "B"
    },
    {
        question: "Quantos carros secretos (Barn Finds) podem ser descobertos em Forza Horizon 1?",
        options: ["A) 5", "B) 7", "C) 8", "D) 9"],
        answer: "D"
    },
    {
        question: "Qual desses carros foi incluído como parte do \"October Car Pack\" DLC para Forza Horizon 1?",
        options: ["A) 2012 Lamborghini Aventador LP700-4", "B) 2002 BMW M3-GTR", "C) 2012 Aston Martin Vanquish", "D) 2004 Ferrari 430 Scuderia"],
        answer: "C"
    },
    {
        question: "Qual destas bandas NÃO faz parte da trilha sonora oficial do Forza Horizon 1?",
        options: ["A) Arctic Monkeys", "B) Nero", "C) The Hives", "D) Imagine Dragons"],
        answer: "D"
    }
];

let embaralhadas = [];
let indiceAtual = 0;
let respostasUsuario = [];
let pontuacao = 0;

let tempoCarregamentoPergunta = 0;
let tempoTotal = 0;

let idIntervalo = null;
let tempoRestante = 30; // tempo inicial por questão

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const timerEl = document.getElementById('timer');

function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    embaralhadas = embaralharPerguntas([...quizData]);
    indiceAtual = 0;
    respostasUsuario = Array(embaralhadas.length).fill(null);
    pontuacao = 0;
    tempoTotal = 0;
    tempoRestante = 30; 

    resultEl.style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    carregandoQuestao();
}

function carregandoQuestao() {
    clearInterval(idIntervalo);

    // Se a resposta anterior foi em menos de 5s, o bônus já foi dado na função nextQuestion
    // tempoRestante pode estar > 10s ganhou bônus (máx 15s, vamos limitar)
    if (tempoRestante > 30) tempoRestante = 30;
    if (tempoRestante < 0) tempoRestante = 0;

    atualizarTempo();

    idIntervalo = setInterval(() => {
        tempoRestante--;
        atualizarTempo();

        if (tempoRestante <= 0) {
            clearInterval(idIntervalo);
            alert('Tempo esgotado!');
            showResult();
        }
    }, 1000);

    tempoCarregamentoPergunta = Date.now(); //tempo da pergunta atual

    const current = embaralhadas[indiceAtual];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = '';

    current.options.forEach(opt => {
        const checked = respostasUsuario[indiceAtual] === opt[0] ? 'checked' : '';
        optionsEl.innerHTML += `<input type="radio" id="${opt[0]}" name="option" value="${opt[0]}" ${checked}>
            <label for="${opt[0]}"> ${opt}</label>`;
    });

    prevBtn.style.display = indiceAtual === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = indiceAtual === embaralhadas.length - 1 ? 'Finalizar' : 'Próximo';
}

function atualizarTempo() {
    timerEl.textContent = `Tempo: ${tempoRestante}s`;
}

function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        respostasUsuario[indiceAtual] = selected.value;
    }
}

function nextQuestion() {
    saveAnswer();

    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert('Por favor, selecione uma resposta!');
        return;
    }

    clearInterval(idIntervalo);

    const responseTime = Math.floor((Date.now() - tempoCarregamentoPergunta) / 1000);
    tempoTotal += responseTime;

    // Se respondeu em menos de 5 segundos, ganha +5 segundos para o próximo tempo
    if (responseTime < 5) {
        tempoRestante += 5; // adiciona o bônus para próxima questão
    }
    // Se respondeu depois de 5s, mantém o tempoLeft que sobrou (sem alteração)

    if (respostasUsuario[indiceAtual] === embaralhadas[indiceAtual].answer) {
        pontuacao++;
    }

    if (indiceAtual < embaralhadas.length - 1) {
        indiceAtual++;
        carregandoQuestao();
    } else {
        showResult();
    }
}

function prevQuestion() {
    clearInterval(idIntervalo);

    saveAnswer();

    if (indiceAtual > 0) {
        indiceAtual--;
        carregandoQuestao();
    }
}

function showResult() {
    clearInterval(idIntervalo);
    document.getElementById('quiz').style.display = 'none';
    resultEl.style.display = 'block';

    resultEl.innerHTML = `
            Você acertou ${pontuacao} de ${embaralhadas.length} perguntas!<br>
            Tempo total gasto para responder: ${tempoTotal}s<br><br>
            <button onclick="startQuiz()">Jogar novamente</button>
            <button onclick="dashQuiz()">Dados quiz</button>
        `;
    adicionarPartida(pontuacao, tempoTotal);
}

startQuiz();

function dashQuiz() {
    window.location = 'dashQuiz.html'
}


function adicionarPartida(pontuacao, tempoTotal) {
   var idVar = sessionStorage.ID_USUARIO;
    var tempoVar = tempoTotal;
    var pontuacaoVar = pontuacao;

    fetch("/partida/adicionarPartida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idServer: idVar,
            tempoServer: tempoVar,
            pontuacaoServer: pontuacaoVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("Dados inseridos no Banco de Dados");
            } else {
                throw "Houve um erro ao tentar realizar o insert!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    //return false;
}

function home() {
    window.location = 'aposlogin.html'
}