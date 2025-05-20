const carros = [
    {
        marca: "Viper",
        modelo: "GTS",
        ano: "2013",
        classe: "SUPER CARS",
        logo: "imagens/viper/logo-viper.png",
        imagem: "imagens/viper/viper-gts.png",
        nivel: "imagens/classe-tracao/niveis/r3-800.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.0,
            controle: 9.6,
            aceleracao: 8.4,
            arrancada: 7.5,
            frenagem: 9.5
        },
        preco: "110.000",
    },
    {
        marca: "Ferrari",
        modelo: "F40",
        ano: "1987",
        classe: "SUPER CARS",
        logo: "imagens/ferrari/logo-ferrari.png",
        imagem: "imagens/ferrari/f40/f40.png",
        nivel: "imagens/classe-tracao/niveis/s-632.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.0,
            controle: 9.4,
            aceleracao: 8.3,
            arrancada: 7.8,
            frenagem: 9.2
        },
        preco: "8000.000",
    },
    {
        marca: "Ferrari",
        modelo: "458 Italia",
        ano: "2009",
        classe: "SUPER CARS",
        logo: "imagens/ferrari/logo-ferrari.png",
        imagem: "imagens/ferrari/458/458.png",
        nivel: "imagens/classe-tracao/niveis/s-672.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.0,
            controle: 7.4,
            aceleracao: 8.9,
            arrancada: 8.6,
            frenagem: 9.0
        },
        preco: "240.000",
    },
    {
        marca: "Bugatti",
        modelo: "Veyron Super Sport",
        ano: "2011",
        classe: "SUPER CARS",
        logo: "imagens/bugatti/logo-bugatti.png",
        imagem: "imagens/bugatti/bugatti-veyron.png",
        nivel: "imagens/classe-tracao/niveis/r2-900.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 10.0,
            controle: 9.4,
            aceleracao: 10.0,
            arrancada: 9.8,
            frenagem: 9.4
        },
        preco: "2.200.000",
    },
    {
        marca: "Lamborghini",
        modelo: "Aventador LP700-4",
        ano: "2012",
        classe: "SUPER CARS",
        logo: "imagens/lamborghini/logo-lamborghini.png",
        imagem: "imagens/lamborghini/lambo-aventador.png",
        nivel: "imagens/classe-tracao/niveis/r3-725.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 10,
            controle: 9.1,
            aceleracao: 9.1,
            arrancada: 8.5,
            frenagem: 8.9
        },
        preco: "400.000",
    },
    {
        marca: "Pagani",
        modelo: "Zonda R",
        ano: "2010",
        classe: "SUPER CARS",
        logo: "imagens/pagani/logo-pagani.png",
        imagem: "imagens/pagani/zonda.png",
        nivel: "imagens/classe-tracao/niveis/r1-961.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.1,
            controle: 9.1,
            aceleracao: 9.4,
            arrancada: 8.9,
            frenagem: 10
        },
        preco: "1.700.000",
    },
    {
        marca: "Koenigsegg",
        modelo: "Agera",
        ano: "2011",
        classe: "SUPER CARS",
        logo: "imagens/Koenigsegg/logo-koenigsegg.png",
        imagem: "imagens/Koenigsegg/azera.png",
        nivel: "imagens/classe-tracao/niveis/r2-815.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 10,
            controle: 9.5,
            aceleracao: 8.9,
            arrancada: 7.8,
            frenagem: 9.4
        },
        preco: "1.400.000",
    },
    {
        marca: "Ford",
        modelo: "GT",
        ano: "2005",
        classe: "SUPER CARS",
        logo: "imagens/ford/logo-ford.png",
        imagem: "imagens/ford/gt/fordGT.png",
        nivel: "imagens/classe-tracao/niveis/a-593.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.9,
            controle: 8.9,
            aceleracao: 8.1,
            arrancada: 6.9,
            frenagem: 8.7
        },
        preco: "150.000",
    },
    {
        marca: "Audi",
        modelo: "Sport Quattro",
        ano: "1983",
        classe: "SPORTS CARS",
        logo: "imagens/audi/logo-audi.png",
        imagem: "imagens/audi/sportQuattro.png",
        nivel: "imagens/classe-tracao/niveis/b-434.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 5.4,
            controle: 8.1,
            aceleracao: 6.7,
            arrancada: 7.8,
            frenagem: 7.9
        },
        preco: "120.000",
    },
    {
        marca: "Lancia",
        modelo: "Stratos HF Stradale",
        ano: "1974",
        classe: "SPORTS CARS",
        logo: "imagens/lancia/logo-lancia.png",
        imagem: "imagens/lancia/lancia.png",
        nivel: "imagens/classe-tracao/niveis/c-329.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 4.3,
            controle: 8.0,
            aceleracao: 6.5,
            arrancada: 6.8,
            frenagem: 7.4
        },
        preco: "50.000",
    },
    {
        marca: "Nissan",
        modelo: "Skyline GTR-R",
        ano: "2000",
        classe: "SPORT CARS",
        logo: "imagens/nissan/logo-gtr.png",
        imagem: "imagens/nissan/nissan-gtr.png",
        nivel: "imagens/classe-tracao/niveis/b-461.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 6.1,
            controle: 8.5,
            aceleracao: 6.8,
            arrancada: 7.4,
            frenagem: 8.3
        },
        preco: "52.000",
    },
    {
        marca: "Toyota",
        modelo: "Supra RZ",
        ano: "2013",
        classe: "SPORT CARS",
        logo: "imagens/toyota/logo-toyota.png",
        imagem: "imagens/toyota/supra-rz.png",
        nivel: "imagens/classe-tracao/niveis/b-464.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 6.8,
            controle: 8.3,
            aceleracao: 6.8,
            arrancada: 6.6,
            frenagem: 8.0
        },
        preco: "8000.00",
    },
    {
        marca: "Chevrolet",
        modelo: "Camaro SS",
        ano: "1969",
        classe: "SPORT CARS",
        logo: "imagens/chevrolet/logo-chevrolet.png",
        imagem: "imagens/chevrolet/camaroSS.png",
        nivel: "imagens/classe-tracao/niveis/d-291.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 4.0,
            controle: 7.0,
            aceleracao: 6.5,
            arrancada: 5.0,
            frenagem: 6.1
        },
        preco: "45.000",
    },
    {
        marca: "Dodge",
        modelo: "Charge R/T-SE",
        ano: "1969",
        classe: "SPORT CARS",
        logo: "imagens/dodge/logo-dodge.png",
        imagem: "imagens/dodge/charge.png",
        nivel: "imagens/classe-tracao/niveis/d-288.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 4.3,
            controle: 6.9,
            aceleracao: 6.5,
            arrancada: 5.4,
            frenagem: 6.1
        },
        preco: "64.000",
    },
    {
        marca: "Ford",
        modelo: "Mustang Boss 302",
        ano: "2013",
        classe: "SPORT CARS",
        logo: "imagens/ford/logo-ford.png",
        imagem: "imagens/ford/mustang/mustang.png",
        nivel: "imagens/classe-tracao/niveis/a-544.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 7.6,
            controle: 8.3,
            aceleracao: 7.7,
            arrancada: 6.5,
            frenagem: 8.2
        },
        preco: "42.000",
    },
    {
        marca: "Ford",
        modelo: "Shelby Cobra 427 S/C",
        ano: "1965",
        classe: "OPEN TOP",
        logo: "imagens/ford/logo-ford.png",
        imagem: "imagens/ford/shelby/cobra.png",
        nivel: "imagens/classe-tracao/niveis/b-694.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 5.7,
            controle: 5.9,
            aceleracao: 7.6,
            arrancada: 6.1,
            frenagem: 7.1
        },
        preco: "900.000",
    },
    {
        marca: "Subaru",
        modelo: "Impreza 22B STi",
        ano: "1998",
        classe: "96s RALLY",
        logo: "imagens/subaru/logo-subaru.png",
        imagem: "imagens/subaru/impreza.png",
        nivel: "imagens/classe-tracao/niveis/b-424.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 5.2,
            controle: 8.6,
            aceleracao: 6.6,
            arrancada: 7.5,
            frenagem: 8.5
        },
        preco: "35.000",
    },
    {
        marca: "Mazda",
        modelo: "rx-7",
        ano: "1997",
        classe: "SPORTS CARS",
        logo: "imagens/mazda/logo-mazda.png",
        imagem: "imagens/mazda/rx-7.png",
        nivel: "imagens/classe-tracao/niveis/b-445.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 7.1,
            controle: 8.2,
            aceleracao: 6.7,
            arrancada: 6.5,
            frenagem: 7.7
        },
        preco: "18.000",
    },
    {
        marca: "Mclaren",
        modelo: "F1",
        ano: "1993",
        classe: "SPORTS CARS",
        logo: "imagens/mclaren/logo-mclaren.png",
        imagem: "imagens/mclaren/f1.png",
        nivel: "imagens/classe-tracao/niveis/s-692.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 10,
            controle: 9.3,
            aceleracao: 8.8,
            arrancada: 8.1,
            frenagem: 9.1
        },
        preco: "1.500.000",
    },
    {
        marca: "Abarth",
        modelo: "500 esseesse",
        ano: "2010",
        classe: "Hot Hatch",
        logo: "imagens/abarth/logo-abarth.png",
        imagem: "imagens/abarth/500.png",
        nivel: "imagens/classe-tracao/niveis/c-526.png",
        tracao: {
            tipo: "DWD",
            imagem: "imagens/classe-tracao/tracao-dianteira.png"
        },
        stats: {
            velocidade: 3.8,
            controle: 8.1,
            aceleracao: 5.7,
            arrancada: 5.7,
            frenagem: 7.9
        },
        preco: "20.000",
    },
    {
        marca: "Alfa Romeu",
        modelo: "8C Competizione",
        ano: "2007",
        classe: "SPORT CAR",
        logo: "imagens/alfaromeu/logo-alfaromeu.png",
        imagem: "imagens/alfaromeu/A8C.png",
        nivel: "imagens/classe-tracao/niveis/a-576.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 7.9,
            controle: 8.6,
            aceleracao: 7.8,
            arrancada: 7.0,
            frenagem: 8.4
        },
        preco: "280.000",
    },
    {
        marca: "Alfa Romeu",
        modelo: "TZ3 Stradale Zagato",
        ano: "2011",
        classe: "SPORT CAR",
        logo: "imagens/alfaromeu/logo-alfaromeu.png",
        imagem: "imagens/alfaromeu/t23.png",
        nivel: "imagens/classe-tracao/niveis/s-664.png",
        tracao: {
            tipo: "DWD",
            imagem: "imagens/classe-tracao/tracao-dianteira.png"
        },
        stats: {
            velocidade: 9,
            controle: 9.2,
            aceleracao: 8.6,
            arrancada: 7.6,
            frenagem: 9.1
        },
        preco: "600.000",
    },
    {
        marca: "Ascari",
        modelo: "KZ1R",
        ano: "2012",
        classe: "SUPERCAR",
        logo: "imagens/ascari/logo-ascari.png",
        imagem: "imagens/ascari/kz1r.png",
        nivel: "imagens/classe-tracao/niveis/s-642.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.8,
            controle: 9.3,
            aceleracao: 8.2,
            arrancada: 7.4,
            frenagem: 9.0
        },
        preco: "350.000",
    },
    {
        marca: "Aston Martin",
        modelo: "DB5 Vantage",
        ano: "1964",
        classe: "SUPERCAR",
        logo: "imagens/astonmartin/logo-astommartin.png",
        imagem: "imagens/astonmartin/dbsVantage.png",
        nivel: "imagens/classe-tracao/niveis/c-315.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 4.9,
            controle: 7.3,
            aceleracao: 6.3,
            arrancada: 5.9,
            frenagem: 6.4
        },
        preco: "Lugares escondidos",
    },
    {
        marca: "Aston Martin",
        modelo: "DB5",
        ano: "2008",
        classe: "SPORT CARS",
        logo: "imagens/astonmartin/logo-astommartin.png",
        imagem: "imagens/astonmartin/dbs.png",
        nivel: "imagens/classe-tracao/niveis/a-556.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.4,
            controle: 8.6,
            aceleracao: 7.6,
            arrancada: 6.7,
            frenagem: 8.5
        },
        preco: "250.000",
    },
    {
        marca: "Ferrari",
        modelo: "250 GTO",
        ano: "1964",
        classe: "SPORT CARS",
        logo: "imagens/ferrari/logo-ferrari.png",
        imagem: "imagens/ferrari/gto.png",
        nivel: "imagens/classe-tracao/niveis/b-439.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 6.6,
            controle: 8.1,
            aceleracao: 7.0,
            arrancada: 5.3,
            frenagem: 7.3
        },
        preco: "10.000.000",
    },
    {
        marca: "Pagani",
        modelo: "Huayra",
        ano: "2012",
        classe: "HYPERCARS",
        logo: "imagens/pagani/logo-pagani.png",
        imagem: "imagens/pagani/huayra.png",
        nivel: "imagens/classe-tracao/niveis/r3-748.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 10,
            controle: 9.5,
            aceleracao: 8.8,
            arrancada: 7.5,
            frenagem: 9.3
        },
        preco: "1.800.000",
    },
    {
        marca: "Hennessey",
        modelo: "Venom GT",
        ano: "2012",
        classe: "SUPER CARS",
        logo: "imagens/hennessey/logo-hennessey.png",
        imagem: "imagens/hennessey/venonGT.png",
        nivel: "imagens/classe-tracao/niveis/r2-894.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 10,
            controle: 9.4,
            aceleracao: 9.1,
            arrancada: 8.1,
            frenagem: 9.5
        },
        preco: "1.000.000",
    },
    {
        marca: "Ferrari",
        modelo: "Enzo Ferrari",
        ano: "2002",
        classe: "SUPER CARS",
        logo: "imagens/ferrari/logo-ferrari.png",
        imagem: "imagens/ferrari/enzo.png",
        nivel: "imagens/classe-tracao/niveis/r3-728.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.6,
            controle: 9.7,
            aceleracao: 8.9,
            arrancada: 7.9,
            frenagem: 9.6
        },
        preco: "1.300.000",
    },
    {
        marca: "Mercedes-benz",
        modelo: "SLS AMG",
        ano: "2011",
        classe: "SUPER CARS",
        logo: "imagens/mercedes/logo-mercedes.png",
        imagem: "imagens/mercedes/slsAMG.png",
        nivel: "imagens/classe-tracao/niveis/s-641.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.1,
            controle: 8.8,
            aceleracao: 8.5,
            arrancada: 7.5,
            frenagem: 8.8
        },
        preco: "270.000",
    },
    {
        marca: "Aston Martin",
        modelo: "ONE-77",
        ano: "2010",
        classe: "SUPER CAR",
        logo: "imagens/astonmartin/logo-astommartin.png",
        imagem: "imagens/astonmartin/one77.png",
        nivel: "imagens/classe-tracao/niveis/s-692.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.8,
            controle: 9.1,
            aceleracao: 8.5,
            arrancada: 7.4,
            frenagem: 9
        },
        preco: "960.000",
    },
    {
        marca: "Audi",
        modelo: "R8 GT COUPE",
        ano: "2011",
        classe: "SUPER CARS",
        logo: "imagens/audi/logo-audi.png",
        imagem: "imagens/audi/r8Coupe.png",
        nivel: "imagens/classe-tracao/niveis/s-648.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.3,
            controle: 8.9,
            aceleracao: 8.9,
            arrancada: 9.5,
            frenagem: 9
        },
        preco: "195.000",
    },
    {
        marca: "BMW",
        modelo: "M3 GTR",
        ano: "2002",
        classe: "SUPER CARS",
        logo: "imagens/bmw/logo-bmw.png",
        imagem: "imagens/bmw/m3GTR.png",
        nivel: "imagens/classe-tracao/niveis/a-568.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 7.4,
            controle: 8.6,
            aceleracao: 7.8,
            arrancada: 6.8,
            frenagem: 8.5
        },
        preco: "120.000",
    },
    {
        marca: "Nissan",
        modelo: "GTR Black Edition",
        ano: "2012",
        classe: "SPORT CARS",
        logo: "imagens/nissan/logo-gtr.png",
        imagem: "imagens/nissan/gtrBlackEdition.png",
        nivel: "imagens/classe-tracao/niveis/s-662.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.1,
            controle: 8.7,
            aceleracao: 8.4,
            arrancada: 9.4,
            frenagem: 8.7
        },
        preco: "120.000",
    },
    {
        marca: "Chevrolet",
        modelo: "Corvette ZR1",
        ano: "2009",
        classe: "MODERN MUSCLE",
        logo: "imagens/chevrolet/logo-chevrolet.png",
        imagem: "imagens/chevrolet/zr1.png",
        nivel: "imagens/classe-tracao/niveis/s-658.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.4,
            controle: 9.0,
            aceleracao: 8.4,
            arrancada: 7.2,
            frenagem: 9.0
        },
        preco: "100.000",
    },
    {
        marca: "Viper",
        modelo: "SRT10 ACR-X",
        ano: "2010",
        classe: "SUPERCAR",
        logo: "imagens/viper/logo-viper.png",
        imagem: "imagens/viper/srt10.png",
        nivel: "imagens/classe-tracao/niveis/R3-800.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.9,
            controle: 10,
            aceleracao: 9,
            arrancada: 8.2,
            frenagem: 10
        },
        preco: "100.000",
    },
    {
        marca: "Lamborghini",
        modelo: "Miura P400",
        ano: "1967",
        classe: "RACE CLASSICS",
        logo: "imagens/lamborghini/logo-lamborghini.png",
        imagem: "imagens/lamborghini/miura.png",
        nivel: "imagens/classe-tracao/niveis/c-385.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 5.8,
            controle: 7.6,
            aceleracao: 7.1,
            arrancada: 6.2,
            frenagem: 6.7
        },
        preco: "Lugares escondidos",
    },
    {
        marca: "Mitsubishi",
        modelo: "Lancer Evolution X GSR",
        ano: "2008",
        classe: "SALOON",
        logo: "imagens/mitsubishi/logo-mitsubishi.png",
        imagem: "imagens/mitsubishi/lancer.png",
        nivel: "imagens/classe-tracao/niveis/b-437.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 5.4,
            controle: 8.3,
            aceleracao: 6.7,
            arrancada: 7.7,
            frenagem: 8.2
        },
        preco: "29.000",
    },
    {
        marca: "Honda",
        modelo: "NSX R-GT",
        ano: "2005",
        classe: "SPORTCAR",
        logo: "imagens/honda/logo-honda.png",
        imagem: "imagens/honda/nsxR-gt.png",
        nivel: "imagens/classe-tracao/niveis/s-541.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 6.5,
            controle: 9.2,
            aceleracao: 7.4,
            arrancada: 7.7,
            frenagem: 9.1
        },
        preco: "400.000"
    },
    {
        marca: "Lotus",
        modelo: "Exige Cup 240",
        ano: "2006",
        classe: "SUPERLIGHT",
        logo: "imagens/lotus/logo-lotus.png",
        imagem: "imagens/lotus/exigecup.png",
        nivel: "imagens/classe-tracao/niveis/a-528.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 5.1,
            controle: 9.4,
            aceleracao: 8.1,
            arrancada: 9.3,
            frenagem: 8.1
        },
        preco: "32.000"
    },
    {
        marca: "Chevrolet",
        modelo: "Camaro ZL1",
        ano: "2012",
        classe: "SPORT CARS",
        logo: "imagens/chevrolet/logo-chevrolet.png",
        imagem: "imagens/chevrolet/zl1.png",
        nivel: "imagens/classe-tracao/niveis/s-579.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 6.7,
            controle: 8,
            aceleracao: 8.5,
            arrancada: 8,
            frenagem: 8.4
        },
        preco: "45.000"
    },
    {
        marca: "Dodge",
        modelo: "Challenger SRT8 392",
        ano: "2012",
        classe: "SPORT CARS",
        logo: "imagens/dodge/logo-dodge.png",
        imagem: "imagens/dodge/challengersrt8.png",
        nivel: "imagens/classe-tracao/niveis/s-507.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 7,
            controle: 8,
            aceleracao: 7.3,
            arrancada: 8,
            frenagem: 7.3
        },
        preco: "45.000"
    },
    {
        marca: "Ford",
        modelo: "Mustang Boss 429",
        ano: "1970",
        classe: "SPORT CARS",
        logo: "imagens/ford/logo-ford.png",
        imagem: "imagens/ford/mustang/boss429.png",
        nivel: "imagens/classe-tracao/niveis/d-380.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 4.7,
            controle: 6.5,
            aceleracao: 4.9,
            arrancada: 6.2,
            frenagem: 6.5
        },
        preco: "120.000"
    },
    {
        marca: "Peugeot",
        modelo: "205 Turbo 16",
        ano: "1984",
        classe: "HATCHBACK",
        logo: "imagens/peugeot/logo-peugeot.png",
        imagem: "imagens/peugeot/205turbo.png",
        nivel: "imagens/classe-tracao/niveis/c-333.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 4,
            controle: 6,
            aceleracao: 5.9,
            arrancada: 7.9,
            frenagem: 6
        },
        preco: "120.000"
    },
    {
        marca: "Lancia",
        modelo: "Delta Integrale EVO",
        ano: "1992",
        classe: "HATCHBACK",
        logo: "imagens/lancia/logo-lancia.png",
        imagem: "imagens/lancia/deltaevo.png",
        nivel: "imagens/classe-tracao/niveis/c-335.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 3.9,
            controle: 7.8,
            aceleracao: 6.3,
            arrancada: 7.2,
            frenagem: 7.4
        },
        preco: "22.000"
    },
    {
        marca: "Volkswagen",
        modelo: "Golf GTI 16v MK2",
        ano: "1992",
        classe: "HATCHBACK",
        logo: "imagens/volkswagen/logo-volkswagen.png",
        imagem: "imagens/volkswagen/golfgti.png",
        nivel: "imagens/classe-tracao/niveis/d-387.png",
        tracao: {
            tipo: "FWD",
            imagem: "imagens/classe-tracao/tracao-dianteira.png"
        },
        stats: {
            velocidade: 3.2,
            controle: 8,
            aceleracao: 4.8,
            arrancada: 5.2,
            frenagem: 7.7
        },
        preco: "20.000"
    },
    {
        marca: "Mini",
        modelo: "Cooper S",
        ano: "1965",
        classe: "ECONOMY",
        logo: "imagens/mini/logo-mini.png",
        imagem: "imagens/mini/s.png",
        nivel: "imagens/classe-tracao/niveis/e-171.png",
        tracao: {
            tipo: "DWD",
            imagem: "imagens/classe-tracao/tracao-dianteira.png"
        },
        stats: {
            velocidade: 3,
            controle: 7.6,
            aceleracao: 5,
            arrancada: 5.2,
            frenagem: 7.3
        },
        preco: "20.000"
    },
    {

    },
    {
        marca: "Toyota",
        modelo: "Sprinter Trueno GT Apex",
        ano: "1985",
        classe: "SPORT CAR",
        logo: "imagens/toyota/logo-toyota.png",
        imagem: "imagens/toyota/sprinter.png",
        nivel: "imagens/classe-tracao/niveis/d-273.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 3.5,
            controle: 7.9,
            aceleracao: 5.9,
            arrancada: 6,
            frenagem: 7.7
        },
        preco: "6.000"
    },
    {
        marca: "Mazda",
        modelo: "MX-5 Miata",
        ano: "1994",
        classe: "SPORT CAR",
        logo: "imagens/mazda/logo-mazda.png",
        imagem: "imagens/mazda/miata.png",
        nivel: "imagens/classe-tracao/niveis/e-226.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 3.1,
            controle: 8.3,
            aceleracao: 4.9,
            arrancada: 5.2,
            frenagem: 8.1
        },
        preco: "7.000"
    },
    {
        marca: "Mercedes-Benz",
        modelo: "SL 65 AMG Black Series",
        ano: "2009",
        classe: "SUPER GT",
        logo: "imagens/mercedes/logo-mercedes.png",
        imagem: "imagens/mercedes/sl65amg.png",
        nivel: "imagens/classe-tracao/niveis/s-563.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.6,
            controle: 8.5,
            aceleracao: 7.8,
            arrancada: 8.1,
            frenagem: 6.6
        },
        preco: "195.000"
    },
    {
        marca: "Jaguar",
        modelo: "E-Type S1",
        ano: "2016",
        classe: "SPORT CAR",
        logo: "imagens/jaguar/logo-jaguar.png",
        imagem: "imagens/jaguar/ETypeS1.png",
        nivel: "imagens/classe-tracao/niveis/s-270.png",
        tracao: {
            tipo: "AWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 4.3,
            controle: 7.3,
            aceleracao: 5.6,
            arrancada: 5,
            frenagem: 6
        },
        preco: "150.000"
    },
    {
        marca: "Shelby",
        modelo: "Cobra Daytona Coupe",
        ano: "1964",
        classe: "SPORT CAR",
        logo: "imagens/ford/logo-ford.png",
        imagem: "imagens/ford/shelby/daytonacoupe.png",
        nivel: "imagens/classe-tracao/niveis/s-529.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 7.3,
            controle: 8.3,
            aceleracao: 7.7,
            arrancada: 6.1,
            frenagem: 7.6
        },
        preco: "500.000"
    },
    {
        marca: "Ferrari",
        modelo: "250 Testa Rossa",
        ano: "1957",
        classe: "OPEN TOP",
        logo: "imagens/ferrari/logo-ferrari.png",
        imagem: "imagens/ferrari/250testarossa.png",
        nivel: "imagens/classe-tracao/niveis/s-364.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 5.9,
            controle: 7,
            aceleracao: 7.6,
            arrancada: 6.6,
            frenagem: 7.1
        },
        preco: "1000.000"
    },
    {
        marca: "Lamborghini",
        modelo: "Diablo SV",
        ano: "1997",
        classe: "SUPER CAR",
        logo: "imagens/lamborghini/logo-lamborghini.png",
        imagem: "imagens/lamborghini/diablosv.png",
        nivel: "imagens/classe-tracao/niveis/s-567.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.4,
            controle: 8.8,
            aceleracao: 7.8,
            arrancada: 7.1,
            frenagem: 8.5
        },
        preco: "200.000"
    },
    {
        marca: "McLaren",
        modelo: "MP4-12C",
        ano: "2011",
        classe: "MODERN SUPER CAR",
        logo: "imagens/mclaren/logo-mclaren.png",
        imagem: "imagens/mclaren/mp412c.png",
        nivel: "imagens/classe-tracao/niveis/s-687.png",
        tracao: {
            tipo: "RWD",
            imagem: "imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.2,
            controle: 9.2,
            aceleracao: 8.6,
            arrancada: 7.5,
            frenagem: 9
        },
        preco: "240.000"
    }
];

function exibirCarro(index) {
    const carro = carros[index];

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
}



nivelPorcentagemVelocidade.style.width = "135px"


nivelPorcentagemControle.style.width = "144px"


nivelPorcentagemAceleracao.style.width = "126px"


nivelPorcentagemArrancagem.style.width = "112.5px"


nivelPorcentagemFrenagem.style.width = "142.5px"