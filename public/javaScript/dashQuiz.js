function home() {
  window.location = 'aposlogin.html'
}

let idUsuario = sessionStorage.getItem('ID_USUARIO');

function pucharKPI() {
  fetch(`/kpi/pucharKPI/${idUsuario}`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(function (dadosKPI) {
      console.log(dadosKPI);

      if (dadosKPI.ok) {
        console.log(`Captura dos dados da KPI ${idUsuario}`, dadosKPI)
        return dadosKPI.json();
      } else {
        throw 'Erro ao buscar os dados no Banco de Dados';
      }
    })
    .then(function (dadosKPI) {
      console.log(dadosKPI);
      totalTentativas.innerHTML = dadosKPI[0].tentativa;
      pontuacaoMedia.innerHTML = dadosKPI[0].pontuacaoMedia;
      tempoMedio.innerHTML = dadosKPI[0].tempoMedio;
    })
    .catch(function (dadosKPI) {
      console.log(`#ERRO: ${dadosKPI}`);
    });
}

function graficoPontuacao() {
  fetch(`/pontuacao/graficoPontuacao/${idUsuario}`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(function (dadosG1) {
      console.log(dadosG1);

      if (dadosG1.ok) {
        console.log(`Captura dos dados do gráfico de pontuacao ${idUsuario}`, dadosG1)
        return dadosG1.json();
      } else {
        throw 'Erro ao buscar os dados no gráfico de pontuacao no Banco de Dados';
      }
    })
    .then(function (dadosG1) {
      // Criando o gráfico de barras com Chart.js
      var mediaPorQuiz = [];

      for(var i = 0; i < dadosG1.length; i++){
        mediaPorQuiz.push(dadosG1[dadosG1.length - 1 - i].pontuacao)
      } 
      console.log(mediaPorQuiz)
      new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
          labels: ['Tentativa 1', 'Tentativa 2', 'Tentativa 3', 'Tentativa 4', 'Tentativa 5'],
          datasets: [{
            label: '',
            data: mediaPorQuiz,
            backgroundColor: ['#00e6e6', '#ffcc00', '#ff4d4d', '#006666', '#ff944d'],
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    })
    .catch(function (dadosG1) {
      console.log(`#ERRO: ${dadosG1}`);
    });
}

function graficoTempo() {
  fetch(`/tempo/graficoTempo/${idUsuario}`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(function (dadosG2) {
      console.log(dadosG2);

      if (dadosG2.ok) {
        console.log(`Captura dos dados do gráfico de Tempo${idUsuario}`, dadosG2)
        return dadosG2.json();
      } else {
        throw 'Erro ao adicionar os dados do gráfico de tempo no Banco de Dados';
      }
    })
    .then(function (dadosG2) {
      var tentativasPorData = [];
      for(var i = 0; i < dadosG2.length; i++){
        tentativasPorData.push(dadosG2[dadosG2.length - 1 - i].tempo)
      } 

      new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
          labels: ['Tentativa 1', 'Tentativa 2', 'Tentativa 3', 'Tentativa 4', 'Tentativa 5'],
          datasets: [{
            label: 'Tentativas',
            data: tentativasPorData,
            fill: false,
            borderColor: '#00e6e6',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    })
    .catch(function (dadosG2) {
      console.log(`#ERRO: ${dadosG2}`);
    });
}


