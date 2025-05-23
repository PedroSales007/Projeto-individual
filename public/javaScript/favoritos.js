
function voltar() {
    window.location = "aposLogin.html"
}

function adicionarCarro() {
    window.location = "garagemGeral.html"

}
// Pega os dados salvos no sessionStorage
const favorito = JSON.parse(sessionStorage.getItem('favorito')) || [];


if (favorito) {
    favorito.forEach(function mostrar(carro,indice){ 
    const pai = document.getElementById('escolherCarro')
    const div = document.createElement('div');
    div.classList.add('change');
    div.innerHTML = `<img src="${carro.imagem}" alt="">`;
    pai.appendChild(div);
    div.addEventListener('click',  function() {
        exibirCarro(indice);
    });
    

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
})


function exibirCarro(indice) {
    const carro = favorito[indice];

    marcaCarro.innerHTML = `<img src="${carro.logo}" alt="">`;
    valorCR.innerHTML = carro.preco;
    // config.onclick = () => window.location = carro.linkConfig;

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
};
}