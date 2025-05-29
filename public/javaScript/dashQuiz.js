function home(){
  window.location = 'aposlogin.html'
}

function pucharKPI(){
  var idUsuario = sessionStorage.getItem('ID_USUARIO')
  fetch(`/kpi/pucharKPI/${idUsuario}`, {
    method:'GET',
    headers: {
      "Content-type": "application/json"
    }
  })
  .then( function(resposta){
    console.log(resposta);

    if(resposta.ok){
      console.log(`Captura dos dados do usuario ${idUsuario}`, resposta )
      return resposta.json();
    } else{
      console.log('Erro ao buscar os dados no Banco de Dados')
    }
  })
}

// Criando o gráfico de barras com Chart.js
new Chart(document.getElementById('barChart'), {
  type: 'bar', // Tipo: barra
  data: {
    labels: quizzes, // No eixo X: os nomes dos quizzes
    datasets: [{
      label: 'Pontuação Média', // Nome do gráfico
      data: mediaPorQuiz, // Dados: as médias calculadas
      backgroundColor: ['#00e6e6', '#ffcc00', '#ff4d4d'], // Cores das barras
    }]
  },
  options: {
    responsive: true, // O gráfico se adapta ao tamanho da tela
    scales: {
      y: { beginAtZero: true } // Começar o eixo Y no zero
    }
  }
});

// ================================
// GRÁFICO DE LINHA: Evolução de Tentativas ao Longo do Tempo
// ================================

// Criando o gráfico de linha
new Chart(document.getElementById('lineChart'), {
  type: 'line', // Tipo: linha
  data: {
    labels: datas, // No eixo X: as datas
    datasets: [{
      label: 'Tentativas', // Nome da linha
      data: tentativasPorData, // Dados: quantidade de tentativas por data
      fill: false, // Não preencher a área abaixo da linha
      borderColor: '#00e6e6', // Cor da linha
      tension: 0.1 // Curvatura suave
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true } // Eixo Y começando no zero
    }
  }
});
