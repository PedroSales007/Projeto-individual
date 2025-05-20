
function voltar() {
    window.location = "aposLogin.html"
}

function adicionarCarro() {
    window.location = "garagemGeral.html"

}
// Pega os dados salvos no sessionStorage
const carroJSON = sessionStorage.getItem("carroSelecionado");

if (carroJSON) {
    const carro = JSON.parse(carroJSON); // transforma de volta em objeto
    exibirCarroDireto(carro); // chama a função passando o carro
}


function exibirCarroDireto(carro) {
    marcaCarro.innerHTML = `<img src="${carro.logo}" alt="">`;
    valorCR.innerHTML = carro.preco;
    nomeMarca.innerHTML = carro.marca;
    nomeModelo.innerHTML = carro.modelo;
    modeloAno.innerHTML = carro.ano;
    classe.innerHTML = carro.classe;
    imgCarro.innerHTML = `<img src="${carro.imagem}" alt="">`;
    nivel.innerHTML = `<img src="${carro.nivel}" alt="">`;


    legendaTracao.innerHTML = carro.tracao.tipo;
    imgTracao.innerHTML = `<img src="${carro.tracao.imagem}" alt="">`;

    velocidade.innerHTML = carro.stats.velocidade;
    nivelPorcentagemVelocidade.style.width = `${carro.stats.velocidade * 15}px`;

    controle.innerHTML = carro.stats.controle;
    nivelPorcentagemControle.style.width = `${carro.stats.controle * 15}px`;

    aceleracao.innerHTML = carro.stats.aceleracao;
    nivelPorcentagemAceleracao.style.width = `${carro.stats.aceleracao * 15}px`;

    arrancada.innerHTML = carro.stats.arrancada;
    nivelPorcentagemArrancagem.style.width = `${carro.stats.arrancada * 15}px`;

    frenagem.innerHTML = carro.stats.frenagem;
    nivelPorcentagemFrenagem.style.width = `${carro.stats.frenagem * 15}px`;
}
