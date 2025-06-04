function sair() {
        window.location = 'favoritos.html'
    }
        const fichaSelecionada = JSON.parse(sessionStorage.getItem("ficha"));

        if (fichaSelecionada) {
            console.log(fichaSelecionada);
            // Aqui você exibe os dados da ficha na tela
        } else {
            console.log("Nenhuma ficha técnica encontrada.");
        }

        aceleracao.innerHTML = `${fichaSelecionada.tempo_0_a_100_kmh}`;
        torque.innerHTML = `${fichaSelecionada.torque}`;
        motor.innerHTML = `${fichaSelecionada.tipo_motor}`;
        potencia.innerHTML = `${fichaSelecionada.potencia_motor_original}`;
        consumo.innerHTML = `${fichaSelecionada.consumo_medio_combustivel}`;
        temperatura.innerHTML = `${fichaSelecionada.temperatura_maxima_motor}`;
        peso.innerHTML = `${fichaSelecionada.peso}`
        velocidadeMaxima.innerHTML = `${fichaSelecionada.velocidade_maxima}`

        // Gráfico 1
        new Chart(document.getElementById('chart1'), {
            type: 'bar',
            data: {
                labels: ['1ª', '2ª', '3ª', '4ª', '5ª'],
                datasets: [{
                    label: 'Velocidade por marcha',
                    backgroundColor: '#4d3a55e0',
                    data: [`${fichaSelecionada.velocidade_por_marcha.m1}`, `${fichaSelecionada.velocidade_por_marcha.m2}`, `${fichaSelecionada.velocidade_por_marcha.m3}`, `${fichaSelecionada.velocidade_por_marcha.m4}`, `${fichaSelecionada.velocidade_por_marcha.m5}`]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Gráfico 2
        new Chart(document.getElementById('chart2'), {
            type: 'line',
            data: {
                labels: ['1km', '2km', '3km', '4km', '5km'],
                datasets: [{
                    label: 'Consumo médio de combustivel em uma corrida',
                    borderColor: '#e67e22',
                    data: [`${fichaSelecionada.consumo_medio_combustivel }`, `${fichaSelecionada.consumo_medio_combustivel + 0.3}`, `${fichaSelecionada.consumo_medio_combustivel + 0.3 }`, `${fichaSelecionada.consumo_medio_combustivel + 0.5}`, `${fichaSelecionada.consumo_medio_combustivel + 0.6}`],
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Gráfico 3
        new Chart(document.getElementById('chart3'), {
            type: 'doughnut',
            data: {
                labels: ['Temperatura Máxima'],
                datasets: [{
                    data: [`${fichaSelecionada.temperatura_maxima_motor}` , 10], // 93ºC de 140ºC
                    backgroundColor: ['#FEFB4C', '#333'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                rotation: -90,
                circumference: 180,
                plugins: {
                    legend: { display: true },
                }
            }
        });


        // Gráfico 4 
        new Chart(document.getElementById('chart4'), {
            type: 'radar',
            data: {
                labels: ['Velocidade', 'Controle', 'Aceleração', 'Arrancada', 'Frenagem'],
                datasets: [{
                    label: 'Desempenho Geral',
                    backgroundColor: 'rgba(164, 190, 175, 0.2)',
                    borderColor: '#fcfcfc',
                    pointBackgroundColor: '#fcfcfc',
                    data: [`${fichaSelecionada.stats.velocidade}`, `${fichaSelecionada.stats.controle}`, `${fichaSelecionada.stats.aceleracao}`, `${fichaSelecionada.stats.arrancada}`, `${fichaSelecionada.stats.frenagem}`] 
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });


