
function voltar() {
    window.location = "aposLogin.html"
}

function adicionarCarro() {
    window.location = "garagemGeral.html"

}

const ficha = [
    {
        id: 1,
        modelo: "GTS",
        velocidade_por_marcha: {
            m1: 55,
            m2: 95,
            m3: 140,
            m4: 185,
            m5: 230
        },
        consumo_medio_combustivel: 2.8,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 4.1,
        torque: 712,
        tipo_motor: "V10 aspirado 8.0L",
        potencia_motor_original: "488 cv",
        peso: "1.590 kg",
        velocidade_maxima: 290,
        stats: {
            velocidade: 9.0,
            controle: 9.6,
            aceleracao: 8.4,
            arrancada: 7.5,
            frenagem: 9.5
        },
    },
    {
        id: 2,
        modelo: "F40",
        velocidade_por_marcha: {
            m1: 60,
            m2: 105,
            m3: 155,
            m4: 210,
            m5: 265
        },
        consumo_medio_combustivel: 3.2,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 3.8,
        torque: 577,
        tipo_motor: "V8 biturbo 2.9L",
        potencia_motor_original: "478 cv",
        peso: "1.100 kg",
        velocidade_maxima: 324,
        stats: {
            velocidade: 8.0,
            controle: 9.4,
            aceleracao: 8.3,
            arrancada: 7.8,
            frenagem: 9.2
        },
    },
    {
        id: 3,
        modelo: "458 Italia",
        velocidade_por_marcha: {
            m1: 55,
            m2: 95,
            m3: 145,
            m4: 190,
            m5: 240
        },
        consumo_medio_combustivel: 5.5,
        temperatura_maxima_motor: 105,
        tempo_0_a_100_kmh: 3.4,
        torque: 540,
        tipo_motor: "V8 aspirado 4.5L",
        potencia_motor_original: "570 cv",
        peso: "1.485 kg",
        velocidade_maxima: 325,
        stats: {
            velocidade: 8.0,
            controle: 7.4,
            aceleracao: 8.9,
            arrancada: 8.6,
            frenagem: 9.0
        },
    },
    {
        id: 4,
        modelo: "Veyron Super Sport",
        velocidade_por_marcha: {
            m1: 60,
            m2: 110,
            m3: 180,
            m4: 260,
            m5: 350
        },
        consumo_medio_combustivel: 3,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 2.5,
        torque: 1.250,
        tipo_motor: "W16 quadriturbo 8.0L",
        potencia_motor_original: "1.001 cv",
        peso: "1.888 kg",
        velocidade_maxima: 407,
        stats: {
            velocidade: 10.0,
            controle: 9.4,
            aceleracao: 10.0,
            arrancada: 9.8,
            frenagem: 9.4
        },
    },
    {
        id: 5,
        modelo: "Aventador LP700-4",
        velocidade_por_marcha: {
            m1: 65,
            m2: 120,
            m3: 190,
            m4: 270,
            m5: 330
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 2.9,
        torque: 690,
        tipo_motor: "V12 aspirado 6.5L",
        potencia_motor_original: "700 cv",
        peso: "1.575 kg",
        velocidade_maxima: 350,
        stats: {
            velocidade: 10,
            controle: 9.1,
            aceleracao: 9.1,
            arrancada: 8.5,
            frenagem: 8.9
        },
    },
    {
        id: 6,
        modelo: "Zonda R",
        velocidade_por_marcha: {
            m1: 70,
            m2: 120,
            m3: 170,
            m4: 220,
            m5: 270
        },
        consumo_medio_combustivel: 3,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 2.7,
        torque: 710,
        tipo_motor: "V12 6.0L",
        potencia_motor_original: "750 cv",
        peso: "1.070 kg",
        velocidade_maxima: 350,
        stats: {
            velocidade: 8.1,
            controle: 9.1,
            aceleracao: 9.4,
            arrancada: 8.9,
            frenagem: 10
        },
    },
    {
        id: 7,
        modelo: "Agera",
        velocidade_por_marcha: {
            m1: 80,
            m2: 140,
            m3: 200,
            m4: 260,
            m5: 320
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 2.8,
        torque: 1.100,
        tipo_motor: "V8 5.0L Twin-Turbo",
        potencia_motor_original: "1.160 cv",
        peso: "1.395 kg",
        velocidade_maxima: 447,
        stats: {
            velocidade: 10,
            controle: 9.5,
            aceleracao: 8.9,
            arrancada: 7.8,
            frenagem: 9.4
        },
    },
    {
        id: 8,
        modelo: "GT",
        velocidade_por_marcha: {
            m1: 80,
            m2: 140,
            m3: 200,
            m4: 260,
            m5: 320
        },
        consumo_medio_combustivel: 5.5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 3.0,
        torque: 746,
        tipo_motor: "V6 3.5L Twin-Turbo",
        potencia_motor_original: "660 cv",
        peso: "1.385 kg",
        velocidade_maxima: 347,
        stats: {
            velocidade: 8.9,
            controle: 8.9,
            aceleracao: 8.1,
            arrancada: 6.9,
            frenagem: 8.7
        },
    },
    {
        id: 9,
        modelo: "Sport Quattro",
        velocidade_por_marcha: {
            m1: 45,
            m2: 80,
            m3: 130,
            m4: 180,
            m5: 230
        },
        consumo_medio_combustivel: 3,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 4.7,
        torque: 450,
        tipo_motor: "I5 turbo 2.1L",
        potencia_motor_original: "306 cv",
        peso: "1.290 kg",
        velocidade_maxima: 250,
        stats: {
            velocidade: 5.4,
            controle: 8.1,
            aceleracao: 6.7,
            arrancada: 7.8,
            frenagem: 7.9
        },
    },
    {
        id: 10,
        modelo: "Stratos HF Stradale",
        velocidade_por_marcha: {
            m1: 50,
            m2: 95,
            m3: 140,
            m4: 190,
            m5: 240
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 105,
        tempo_0_a_100_kmh: 5.6,
        torque: 245,
        tipo_motor: "V6 aspirado 2.4L",
        potencia_motor_original: "190 cv",
        peso: "920 kg",
        velocidade_maxima: 232,
        stats: {
            velocidade: 4.3,
            controle: 8.0,
            aceleracao: 6.5,
            arrancada: 6.8,
            frenagem: 7.4
        },
    },
    {
        id: 11,
        modelo: "Skyline GT-R",
        velocidade_por_marcha: {
            m1: 50,
            m2: 90,
            m3: 130,
            m4: 170,
            m5: 210
        },
        consumo_medio_combustivel: 10.5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 5.6,
        torque: 353,
        tipo_motor: "6 cilindros em linha turbo 2.6L",
        potencia_motor_original: "280 cv",
        peso: "1.430 kg",
        velocidade_maxima: 251,
        stats: {
            velocidade: 6.1,
            controle: 8.5,
            aceleracao: 6.8,
            arrancada: 7.4,
            frenagem: 8.3
        },
    },
    {
        id: 12,
        modelo: "Supra RZ",
        velocidade_por_marcha: {
            m1: 60,
            m1: 0,
            m2: 5,
            m3: 40,
            m4: 85,
            m5: 250,
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 4.9,
        torque: 441,
        tipo_motor: "2JZ-GTE 3.0L I6 Biturbo",
        potencia_motor_original: "330 cv",
        peso: "1.560 kg",
        velocidade_maxima: 250,
        stats: {
            velocidade: 6.8,
            controle: 8.3,
            aceleracao: 6.8,
            arrancada: 6.6,
            frenagem: 8.0
        },
    },
    {
        id: 13,
        modelo: "Camaro SS",
        velocidade_por_marcha: {
            m1: 50,
            m2: 100,
            m3: 150,
            m4: 200,
            m5: 250
        },
        consumo_medio_combustivel: 11.1,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 4.4,
        torque: 617,
        tipo_motor: "V8 aspirado 6.2L",
        potencia_motor_original: "453 cv",
        peso: "1.659 kg",
        velocidade_maxima: 290,
        stats: {
            velocidade: 4.0,
            controle: 7.0,
            aceleracao: 6.5,
            arrancada: 5.0,
            frenagem: 6.1
        },
    },
    {
        id: 14,
        modelo: "Charger R/T-SE",
        velocidade_por_marcha: {
            m1: 50,
            m2: 90,
            m3: 130,
            m4: 170,
            m5: 210
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 6.5,
        torque: 650,
        tipo_motor: "V8 7.2L",
        potencia_motor_original: "375 cv",
        peso: "1.650 kg",
        velocidade_maxima: 220,
        stats: {
            velocidade: 4.3,
            controle: 6.9,
            aceleracao: 6.5,
            arrancada: 5.4,
            frenagem: 6.1
        },
    },
    {
        id: 15,
        modelo: "Mustang Boss 302",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 140,
            m4: 180,
            m5: 220
        },
        consumo_medio_combustivel: 5.5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 6.8,
        torque: 500,
        tipo_motor: "V8 4.9L",
        potencia_motor_original: "290 cv",
        peso: "1.400 kg",
        velocidade_maxima: 210,
        stats: {
            velocidade: 7.6,
            controle: 8.3,
            aceleracao: 7.7,
            arrancada: 6.5,
            frenagem: 8.2
        },
    },
    {
        id: 16,
        modelo: "Shelby Cobra 427",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 150,
            m4: 190,
            m5: 220
        },
        consumo_medio_combustivel: 3,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 4.2,
        torque: 651,
        tipo_motor: "V8 7.0L",
        potencia_motor_original: "425 cv",
        peso: "1.067 kg",
        velocidade_maxima: 265,
        stats: {
            velocidade: 5.7,
            controle: 5.9,
            aceleracao: 7.6,
            arrancada: 6.1,
            frenagem: 7.1
        },
    },
    {
        id: 17,
        modelo: "Impreza 22B STi",
        velocidade_por_marcha: {
            m1: 50,
            m2: 90,
            m3: 130,
            m4: 170,
            m5: 220
        },
        consumo_medio_combustivel: 7,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 4.7,
        torque: 363,
        tipo_motor: "Boxer 4 cilindros turbo 2.2L",
        potencia_motor_original: "280 cv",
        peso: "1.270 kg",
        velocidade_maxima: 240,
        stats: {
            velocidade: 5.2,
            controle: 8.6,
            aceleracao: 6.6,
            arrancada: 7.5,
            frenagem: 8.5
        },
    },
    {
        id: 18,
        modelo: "RX-7",
        velocidade_por_marcha: {
            m1: 55,
            m2: 95,
            m3: 140,
            m4: 180,
            m5: 240
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 5.3,
        torque: 294,
        tipo_motor: "Rotativo Wankel 1.3L biturbo",
        potencia_motor_original: "280 cv",
        peso: "1.280 kg",
        velocidade_maxima: 250,
        stats: {
            velocidade: 7.1,
            controle: 8.2,
            aceleracao: 6.7,
            arrancada: 6.5,
            frenagem: 7.7
        },
    },
    {
        id: 19,
        modelo: "McLaren F1",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 150,
            m4: 200,
            m5: 250
        },
        consumo_medio_combustivel: 4.9,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 3.2,
        torque: 649,
        tipo_motor: "V12 aspirado 6.1L",
        potencia_motor_original: "618 cv",
        peso: "1.134 kg",
        velocidade_maxima: 391,
        stats: {
            velocidade: 10,
            controle: 9.3,
            aceleracao: 8.8,
            arrancada: 8.1,
            frenagem: 9.1
        },
    },
    {
        id: 20,
        modelo: "500 esseesse",
        velocidade_por_marcha: {
            m1: 30,
            m2: 60,
            m3: 90,
            m4: 120,
            m5: 150
        },
        consumo_medio_combustivel: 6.5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 7.9,
        torque: 206,
        tipo_motor: "4 cilindros turbo 1.4L",
        potencia_motor_original: "135 cv",
        peso: "1.035 kg",
        velocidade_maxima: 205,
        stats: {
            velocidade: 3.8,
            controle: 8.1,
            aceleracao: 5.7,
            arrancada: 5.7,
            frenagem: 7.9
        },
    },
    {
        id: 21,
        modelo: "8C Competizione",
        velocidade_por_marcha: {
            m1: 55,
            m2: 90,
            m3: 140,
            m4: 190,
            m5: 250
        },
        consumo_medio_combustivel: 5.5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 4.2,
        torque: 480,
        tipo_motor: "V8 aspirado 4.7L",
        potencia_motor_original: "450 cv",
        peso: "1.585 kg",
        velocidade_maxima: 292,
        stats: {
            velocidade: 7.9,
            controle: 8.6,
            aceleracao: 7.8,
            arrancada: 7.0,
            frenagem: 8.4
        },
    },
    {
        id: 22,
        modelo: "TZ3 Stradale Zagato",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 150,
            m4: 200,
            m5: 280
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 3.5,
        torque: 637,
        tipo_motor: "V10 aspirado 8.4L",
        potencia_motor_original: "600 cv",
        peso: "1.480 kg",
        velocidade_maxima: 320,
        stats: {
            velocidade: 9,
            controle: 9.2,
            aceleracao: 8.6,
            arrancada: 7.6,
            frenagem: 9.1
        },
    },
    {
        id: 23,
        modelo: "KZ1R",
        velocidade_por_marcha: {
            m1: 65,
            m2: 110,
            m3: 160,
            m4: 210,
            m5: 280
        },
        consumo_medio_combustivel: 4.5,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 3.0,
        torque: 550,
        tipo_motor: "V8 aspirado 5.0L",
        potencia_motor_original: "520 cv",
        peso: "1.280 kg",
        velocidade_maxima: 322,
        stats: {
            velocidade: 8.8,
            controle: 9.3,
            aceleracao: 8.2,
            arrancada: 7.4,
            frenagem: 9.0
        },
    },
    {
        id: 24,
        modelo: "DB5 Vantage",
        velocidade_por_marcha: {
            m1: 45,
            m2: 80,
            m3: 120,
            m4: 160,
            m5: 190
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 7.0,
        torque: 390,
        tipo_motor: "6 cilindros em linha 4.0L",
        potencia_motor_original: "325 cv",
        peso: "1.502 kg",
        velocidade_maxima: 230,
        stats: {
            velocidade: 4.9,
            controle: 7.3,
            aceleracao: 6.3,
            arrancada: 5.9,
            frenagem: 6.4
        },
    },
    {
        id: 25,
        modelo: "DB5",
        velocidade_por_marcha: {
            m1: 40,
            m2: 75,
            m3: 115,
            m4: 150,
            m5: 185
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 8.0,
        torque: 390,
        tipo_motor: "6 cilindros em linha 4.0L",
        potencia_motor_original: "282 cv",
        peso: "1.502 kg",
        velocidade_maxima: 230,
        stats: {
            velocidade: 8.4,
            controle: 8.6,
            aceleracao: 7.6,
            arrancada: 6.7,
            frenagem: 8.5
        },
    },
    {
        id: 26,
        modelo: "250 GTO",
        velocidade_por_marcha: {
            m1: 50,
            m2: 90,
            m3: 130,
            m4: 170,
            m5: 240,
        },
        consumo_medio_combustivel: 3,
        temperatura_maxima_motor: 110,
        tempo_0_a_00_kmh: "6.1 segndos",
        torque: 94,
        tipo_moto: "V12 aspirado 3.0L",
        potencia_motor_original: "300 cv",
        peo: "88 kg",
        velocidade_maxima: 280,
        stats: {
            velocidade: 6.6,
            controle: 8.1,
            aceleracao: 7.0,
            arrancada: 5.3,
            frenagem: 7.3
        },
    },
    {
        id: 27,
        modelo: "Huayra",
        velocidade_por_marcha: {
            m1: 70,
            m2: 130,
            m3: 190,
            m4: 250,
            m5: 330,
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 125,
        tempo_0_a_00_kmh: "3.2 segndos",
        torque: 1000,
        tipo_motor: "V12 biturbo 6.0L",
        potencia_motor_original: "730 cv",
        peso: "1.50 kg",
        velocidade_maxima: 383,
        stats: {
            velocidade: 10,
            controle: 9.5,
            aceleracao: 8.8,
            arrancada: 7.5,
            frenagem: 9.3
        },
    },
    {
        id: 28,
        modelo: "Venom GT",
        velocidade_por_marcha: {
            m1: 80,
            m2: 150,
            m3: 220,
            m4: 290,
            m5: 370,
        },
        consumo_medio_combustivel: 4,
        temperatura_maxima_motor: 130,
        tempo_0_a_00_kmh: "2.7 segndos",
        torque: 1.745,
        tipo_motor: "V8 biturbo 7.0L",
        potencia_motor_original: "1.244 cv",
        peso: "1.44 kg",
        velocidade_maxima: 435,
        stats: {
            velocidade: 10,
            controle: 9.4,
            aceleracao: 9.1,
            arrancada: 8.1,
            frenagem: 9.5
        },
    },
    {
        id: 29,
        modelo: "Enzo Ferrari",
        velocidade_por_marcha: {
            m1: 70,
            m2: 110,
            m3: 160,
            m4: 210,
            m5: 280
        },
        consumo_medio_combustivel: 4,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 3.6,
        torque: 657,
        tipo_motor: "V12 aspirado 6.0L",
        potencia_motor_original: "660 cv",
        peso: "1.365 kg",
        velocidade_maxima: 350,
        stats: {
            velocidade: 9.6,
            controle: 9.7,
            aceleracao: 8.9,
            arrancada: 7.9,
            frenagem: 9.6
        },
    },
    {
        id: 30,
        modelo: "SLS AMG",
        velocidade_por_marcha: {
            m1: 65,
            m2: 105,
            m3: 150,
            m4: 200,
            m5: 250
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 3.8,
        torque: 650,
        tipo_motor: "V8 aspirado 6.2L",
        potencia_motor_original: "571 cv",
        peso: "1.620 kg",
        velocidade_maxima: 317,
        stats: {
            velocidade: 9.1,
            controle: 8.8,
            aceleracao: 8.5,
            arrancada: 7.5,
            frenagem: 8.8
        },
    },
    {
        id: 31,
        modelo: "ONE-77",
        velocidade_por_marcha: {
            m1: 70,
            m2: 120,
            m3: 170,
            m4: 230,
            m5: 300
        },
        consumo_medio_combustivel: 4,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 3.7,
        torque: 750,
        tipo_motor: "V12 aspirado 7.3L",
        potencia_motor_original: "760 cv",
        peso: "1.630 kg",
        velocidade_maxima: 354,
        stats: {
            velocidade: 9.8,
            controle: 9.1,
            aceleracao: 8.5,
            arrancada: 7.4,
            frenagem: 9
        },
    },
    {
        id: 32,
        modelo: "R8 GT COUPE",
        velocidade_por_marcha: {
            m1: 60,
            m2: 110,
            m3: 160,
            m4: 210,
            m5: 280
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 3.6,
        torque: 540,
        tipo_motor: "V10 aspirado 5.2L",
        potencia_motor_original: "560 cv",
        peso: "1.525 kg",
        velocidade_maxima: 320,
        stats: {
            velocidade: 8.3,
            controle: 8.9,
            aceleracao: 8.9,
            arrancada: 9.5,
            frenagem: 9
        },
    },
    {
        id: 33,
        modelo: "M3 GTR",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 150,
            m4: 200,
        },
        m5: 250,
        consumo_medio_combustivel: 4,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 3.4,
        torque: 500,
        tipo_motor: "V8 aspirado 4.0L",
        potencia_motor_original: "493 cv",
        peso: "1.350 kg",
        velocidade_maxima: 295,
        stats: {
            velocidade: 7.4,
            controle: 8.6,
            aceleracao: 7.8,
            arrancada: 6.8,
            frenagem: 8.5
        },
    },
    {
        id: 34,
        modelo: "Nissan GTR Black Edition",
        velocidade_por_marcha: {
            m1: 60,
            m2: 110,
            m3: 160,
            m4: 210,
            m5: 260,
        },

        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 115,
        tempo_0_a_00_kmh: "2.9 segndos",
        torque: 32,
        tipo_moto: "V6 biturbo 3.8L",
        potencia_motor_original: "550 cv",
        peso: "1.40 kg",
        velocidade_maxima: 315,
        stats: {
            velocidade: 9.1,
            controle: 8.7,
            aceleracao: 8.4,
            arrancada: 9.4,
            frenagem: 8.7
        },
    },
    {
        id: 35,
        modelo: "Corvette ZR1",
        velocidade_por_marcha: {
            m1: 65,
            m2: 120,
            m3: 170,
            m4: 220,
            m5: 280,
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 120,
        tempo_0_a_00_kmh: "3.4 segndos",
        torque: 81,
        tipo_moto: "V8 supercharged 6.2L",
        potencia_motor_original: "755 cv",
        peso: "1.95 kg",
        velocidade_maxima: 341,
        stats: {
            velocidade: 9.4,
            controle: 9.0,
            aceleracao: 8.4,
            arrancada: 7.2,
            frenagem: 9.0
        },
    },
    {
        id: 36,
        modelo: "Viper SRT10 ACR-X",
        velocidade_por_marcha: {
            m1: 80,
            m2: 135,
            m3: 185,
            m4: 240,
            m5: 290
        },
        consumo_medio_combustivel: 4,
        temperatura_maxima_motor: 125,
        tempo_0_a_100_kmh: 3.3,
        torque: 814,
        tipo_motor: "V10 aspirado 8.4L",
        potencia_motor_original: "640 cv",
        peso: "1.460 kg",
        velocidade_maxima: 295,
        stats: {
            velocidade: 8.9,
            controle: 10,
            aceleracao: 9,
            arrancada: 8.2,
            frenagem: 10
        },
    },
    {
        id: 37,
        modelo: "Miura P400",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 150,
            m4: 200,
            m5: 275
        },
        consumo_medio_combustivel: 4,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 6.7,
        torque: 355,
        tipo_motor: "V12 aspirado 3.9L",
        potencia_motor_original: "350 cv",
        peso: "1.290 kg",
        velocidade_maxima: 280,
        stats: {
            velocidade: 5.8,
            controle: 7.6,
            aceleracao: 7.1,
            arrancada: 6.2,
            frenagem: 6.7
        },
    },
    {
        id: 38,
        modelo: "Lancer Evolution X GSR",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 140,
            m4: 190,
            m5: 240
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 5.0,
        torque: 366,
        tipo_motor: "4 cilindros turbo 2.0L",
        potencia_motor_original: "291 cv",
        peso: "1.550 kg",
        velocidade_maxima: 242,
        stats: {
            velocidade: 5.4,
            controle: 8.3,
            aceleracao: 6.7,
            arrancada: 7.7,
            frenagem: 8.2
        },
    },
    {
        id: 39,
        modelo: "NSX R-GT",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 140,
            m4: 180,
            m5: 230
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 3.5,
        torque: 398,
        tipo_motor: "V6 biturbo 3.0L",
        potencia_motor_original: "550 cv",
        peso: "1.240 kg",
        velocidade_maxima: 300,
        stats: {
            velocidade: 6.5,
            controle: 9.2,
            aceleracao: 7.4,
            arrancada: 7.7,
            frenagem: 9.1
        },
    },
    {
        id: 40,
        modelo: "Exige Cup 240",
        velocidade_por_marcha: {
            m1: 50,
            m2: 90,
            m3: 130,
            m4: 170,
            m5: 220
        },
        consumo_medio_combustivel: 9,
        temperatura_maxima_motor: 105,
        tempo_0_a_100_kmh: 4.1,
        torque: 236,
        tipo_motor: "4 cilindros 1.8L supercharged",
        potencia_motor_original: "243 cv",
        peso: "930 kg",
        velocidade_maxima: 245,
        stats: {
            velocidade: 5.1,
            controle: 9.4,
            aceleracao: 8.1,
            arrancada: 9.3,
            frenagem: 8.1
        },
    },
    {
        id: 41,
        modelo: "Chevrolet Camaro ZL1",
        velocidade_por_marcha: {
            m1: 65,
            m2: 110,
            m3: 160,
            m4: 210,
            m5: 260
        },
        consumo_medio_combustivel: 7,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 3.5,
        torque: 881,
        tipo_motor: "V8 supercharged 6.2L",
        potencia_motor_original: "659 cv",
        peso: "1.790 kg",
        velocidade_maxima: 318,
        stats: {
            velocidade: 6.7,
            controle: 8,
            aceleracao: 8.5,
            arrancada: 8,
            frenagem: 8.4
        },
    },
    {
        id: 42,
        modelo: "Challenger SRT8 392",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 150,
            m4: 200,
            m5: 240
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 4.3,
        torque: 644,
        tipo_motor: "V8 aspirado 6.4L",
        potencia_motor_original: "485 cv",
        peso: "1.920 kg",
        velocidade_maxima: 280,
        stats: {
            velocidade: 7,
            controle: 8,
            aceleracao: 7.3,
            arrancada: 8,
            frenagem: 7.3
        },
    },
    {
        id: 43,
        modelo: "Mustang Boss 429",
        velocidade_por_marcha: {
            m1: 55,
            m2: 95,
            m3: 140,
            m4: 185,
            m5: 220
        },
        consumo_medio_combustivel: 5,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 5.3,
        torque: 610,
        tipo_motor: "V8 aspirado 7.0L",
        potencia_motor_original: "375 cv",
        peso: "1.630 kg",
        velocidade_maxima: 225,
        stats: {
            velocidade: 4.7,
            controle: 6.5,
            aceleracao: 4.9,
            arrancada: 6.2,
            frenagem: 6.5
        },
    },
    {
        id: 44,
        modelo: "205 Turbo 16",
        velocidade_por_marcha: {
            m1: 55,
            m2: 95,
            m3: 135,
            m4: 175,
            m5: 210
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 115,
        tempo_0_a_100_kmh: 6.0,
        torque: 290,
        tipo_motor: "4 cilindros turbo 1.8L",
        potencia_motor_original: "200 cv",
        peso: "1.140 kg",
        velocidade_maxima: 210,
        stats: {
            velocidade: 4,
            controle: 6,
            aceleracao: 5.9,
            arrancada: 7.9,
            frenagem: 6
        },
    },
    {
        id: 45,
        modelo: "Delta Integrale EVO",
        velocidade_por_marcha: {
            m1: 50,
            m2: 85,
            m3: 130,
            m4: 175,
            m5: 215
        },
        consumo_medio_combustivel: 7,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 5.7,
        torque: 309,
        tipo_motor: "4 cilindros turbo 2.0L",
        potencia_motor_original: "215 cv",
        peso: "1.360 kg",
        velocidade_maxima: 220,
        stats: {
            velocidade: 3.9,
            controle: 7.8,
            aceleracao: 6.3,
            arrancada: 7.2,
            frenagem: 7.4
        },
    },
    {
        id: 46,
        modelo: "Golf GTI 16v MK2",
        velocidade_por_marcha: {
            m1: 45,
            m2: 75,
            m3: 115,
            m4: 155,
            m5: 190,
        },
        consumo_medio_combustivel: 10,
        temperatura_maxima_motor: 105,
        tempo_0_a_100_kmh: 8.5,
        torque: 166,
        tipo_motor: "1.8L I4 aspirado",
        potencia_motor_original: "139 cv",
        peso: "960 kg",
        velocidade_maxima: 200,
        stats: {
            velocidade: 3.2,
            controle: 8,
            aceleracao: 4.8,
            arrancada: 5.2,
            frenagem: 7.7
        },
    },
    {
        id: 47,
        modelo: "Cooper S",
        velocidade_por_marcha: {
            m1: 50,
            m2: 80,
            m3: 120,
            m4: 165,
            m5: 220,
        },
        consumo_medio_combustivel: 9,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 7.0,
        torque: 220,
        tipo_motor: "1.6L I4 Supercharged",
        potencia_motor_original: "163 cv",
        peso: "1.135 kg",
        velocidade_maxima: 225,
        stats: {
            velocidade: 3,
            controle: 7.6,
            aceleracao: 5,
            arrancada: 5.2,
            frenagem: 7.3
        },
    },
    {
        id: 48,
        modelo: "Sprinter Trueno",
        velocidade_por_marcha: {
            m1: 40,
            m2: 70,
            m3: 110,
            m4: 150,
            m5: 190,
        },
        consumo_medio_combustivel: 11,
        temperatura_maxima_motor: 100,
        tempo_0_a_100_kmh: 8.5,
        torque: 149,
        tipo_motor: "4A-GE 1.6L I4 aspirado",
        potencia_motor_original: "130 cv",
        peso: "950 kg",
        velocidade_maxima: 195,
        stats: {
            velocidade: 3.5,
            controle: 7.9,
            aceleracao: 5.9,
            arrancada: 6,
            frenagem: 7.7
        },
    },
    {
        id: 49,
        modelo: "MX-5 Miata",
        velocidade_por_marcha: {
            m1: 50,
            m2: 85,
            m3: 120,
            m4: 155,
            m5: 190
        },
        consumo_medio_combustivel: 12,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 6.5,
        torque: 205,
        tipo_motor: "4 cilindros aspirado 2.0L",
        potencia_motor_original: "184 cv",
        peso: "1.060 kg",
        velocidade_maxima: 220,
        stats: {
            velocidade: 3.1,
            controle: 8.3,
            aceleracao: 4.9,
            arrancada: 5.2,
            frenagem: 8.1
        },
    },
    {
        id: 50,
        modelo: "SL 65 AMG Black Series",
        velocidade_por_marcha: {
            m1: 70,
            m2: 120,
            m3: 170,
            m4: 220,
            m5: 250
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 3.9,
        torque: 1.000,
        tipo_motor: "V12 biturbo 6.0L",
        potencia_motor_original: "630 cv",
        peso: "1.950 kg",
        velocidade_maxima: 250,
        stats: {
            velocidade: 8.6,
            controle: 8.5,
            aceleracao: 7.8,
            arrancada: 8.1,
            frenagem: 6.6
        },
    },
    {
        id: 51,
        modelo: "E-Type S1",
        velocidade_por_marcha: {
            m1: 50,
            m2: 85,
            m3: 125,
            m4: 165,
            m5: 195,
        },
        consumo_medio_combustivel: 6,
        temperatura_maxima_motor: 110,
        tempo_0_a_100_kmh: 7,
        torque: 353,
        tipo_motor: "Inline-6 3.8L",
        potencia_motor_original: "265 cv",
        peso: "1.315 kg",
        velocidade_maxima: 241,
        stats: {
            velocidade: 4.3,
            controle: 7.3,
            aceleracao: 5.6,
            arrancada: 5,
            frenagem: 6
        },
    },
    {
        id: 52,
        modelo: "Cobra Daytona Coupe",
        velocidade_por_marcha: {
            m1: 60,
            m2: 100,
            m3: 140,
            m4: 180,
            m5: 240,
        },

        consumo_medio_combustivel: 4,
        temperatura_maxima_motor: 120,
        tempo_0_a_100_kmh: 4.4,
        torque: 580,
        tipo_motor: "V8 4.7L",
        potencia_motor_original: "385 cv",
        peso: "1.043 kg",
        velocidade_maxima: 298,
        stats: {
            velocidade: 7.3,
            controle: 8.3,
            aceleracao: 7.7,
            arrancada: 6.1,
            frenagem: 7.6
        },
    },
    {
        id: 53,
        modelo: "Testa Rossa",
        velocidade_por_marcha: {
            m1: 55,
            m2: 95,
            m3: 145,
            m4: 190,
            m5: 250,
        },

        consumo_medio_combustivel: 3,
        temperatura_maxima_motor: 125,
        tempo_0_a_100_kmh: 5.3,
        torque: 490,
        tipo_motor: "V12 4.9L",
        potencia_motor_original: "390 cv",
        peso: "1.506 kg",
        velocidade_maxima: 290,
        stats: {
            velocidade: 5.9,
            controle: 7,
            aceleracao: 7.6,
            arrancada: 6.6,
            frenagem: 7.1
        },
    },
    {
        id: 54,
        modelo: "Diablo SV",
        velocidade_por_marcha: {
            m1: 65,
            m2: 110,
            m3: 160,
            m4: 215,
            m5: 285,
        },
        consumo_medio_combustivel: 2.5,
        temperatura_maxima_motor: 125,
        tempo_0_a_100_kmh: 3.9,
        torque: 580,
        tipo_motor: "V12 5.7L",
        potencia_motor_original: "530 cv",
        peso: "1.570 kg",
        velocidade_maxima: 325,
        stats: {
            velocidade: 8.4,
            controle: 8.8,
            aceleracao: 7.8,
            arrancada: 7.1,
            frenagem: 8.5
        },
    },
    {
        id: 55,
        modelo: "MP4-12C",
        velocidade_por_marcha: {
            m1: 70,
            m2: 120,
            m3: 170,
            m4: 230,
            m5: 300,
        },
        consumo_medio_combustivel: 7,
        temperatura_maxima_motor: 130,
        tempo_0_a_100_kmh: 3.1,
        torque: 601,
        tipo_motor: "V8 Biturbo 3.8L",
        potencia_motor_original: "600 cv",
        peso: "1.434 kg",
        velocidade_maxima: 330,
        stats: {
            velocidade: 9.2,
            controle: 9.2,
            aceleracao: 8.6,
            arrancada: 7.5,
            frenagem: 9
        },
    }
];
// Pega os dados salvos no sessionStorage
const favorito = JSON.parse(sessionStorage.getItem('favorito')) || [];
const dashBtn = document.getElementById('config');
let carroSelecionadoIndice = null;

if (favorito) {
    favorito.forEach(function mostrar(carro, indice) {
        const pai = document.getElementById('escolherCarro');
        const div = document.createElement('div');

        div.classList.add('change');
        div.innerHTML = `<img src="${carro.imagem}" alt="">`;
        pai.appendChild(div);

        div.addEventListener('click', function () {
            exibirCarro(indice);
            carroSelecionadoIndice = indice
        });
    });
}

dashBtn.addEventListener('click', function () {
    if (carroSelecionadoIndice !== null) {
        dash(carroSelecionadoIndice, carroSelecionadoIndice);
    } else {
        alert("Selecione um carro primeiro!");
    }
});

function exibirCarro(indice) {
    const carro = favorito[indice];
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

function dash(indice) {
    const carro = favorito[indice];

    // Procura a ficha técnica com o mesmo id do carro
    const fichaT = ficha.find(f => f.id === carro.id);

    if (fichaT) {
        // Armazena a ficha técnica no sessionStorage
        sessionStorage.setItem("ficha", JSON.stringify(fichaT));

        // Redireciona para a dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Ficha técnica não encontrada para este carro.");
    }
}


