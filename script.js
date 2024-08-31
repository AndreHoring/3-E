const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ultimo titulo da copa do mundo da Seleção Brasileira?",
        alternativas: [
            {
                texto: "2002",
                afirmacao: "2002 foi o ano mais valioso para o Brasil de acordo com minhas informações e dados obtidos pois em 2002 o brasil foi Primeiro tetracampeão da copa do mundo.. "
            },
            {
                texto: "2018",
                afirmacao: "Essa Informação Não convem com minha Memória, e não foi o Brasil ganhador da copa de 2018."
            }
        ]
    },
    {
        enunciado: "Quem é o melhor professor do mundo?",
        alternativas: [
            {
                texto: "Marcelo Paluetto Rodrigues ",
                afirmacao: "Professor Mal Atencioso, só manda e não Ajuda nas Atividades"
            },
            {
                texto: "Rafael dos Santos Biano (Buiu).",
                afirmacao: "Rafael (BUIU) é um professor muito atencioso e gente boa que sabe sempre conversar e lidar com os alunos."
            }
        ]
    },
    {
        enunciado: "Qual a marca mais forte no mercado do Futebol? ",
        alternativas: [
            {
                texto: "Adidas e Nike",
                afirmacao: "Adidas e Nike são as marcas que tem mais repercurtorio e fama no cenario do Futebol."
            },
            {
                texto: "Umbro e Topper",
                afirmacao: "Essas Marcas ja tiveram sua Fama e Repercutório no cenario do Futebol, hoje em dia não Mais..."
            }
        ]
    },
    {
        enunciado: "Qual a Seleção que conquistou mais Titulos de Copa do Mundo?
",
        alternativas: [
            {
                texto: "Brasil",
                afirmacao: "Brasil conquistou a maior quantidade de titulos da Copa do Mundo: 1958, 1962, 1970, 1994 e 2002."
            },
            {
                texto: "Itália",
                afirmacao: "Itália obteve quatro (1934,1938,1982 e 2006)"
            }
        ]
    },
    {
        enunciado: "Qual foi o jogador mais famoso da História?
",
        alternativas: [
            {
                texto: "Maradona",
                afirmacao: "Maradona teve seu Auge, mas foi deixando se levar pelas suas decisões na vida..."
            },
            {
                texto: "Pelé",
                afirmacao: "O atacante brasileiro é o maior campeão de Copas do Mundo na história da competição. O Rei do futebol conquistou três títulos (Suécia 1958, Chile 1962 e México 1970, sendo o primeiro deles com apenas 17 anos de idade.."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
