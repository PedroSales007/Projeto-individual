create database horizonTuner;
use horizonTuner;

create table cadastro(
idCadastro int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

select * from cadastro;

create table quiz(
idQuiz int primary key auto_increment,
tentativas int
);
INSERT INTO quiz (tentativas) VALUES (0);

select * from quiz;

create table partida(
idPartida int auto_increment,
idUsuario int,
idQuiz int,
constraint triplaKey primary key(idPartida, idUsuario, idQuiz),
constraint fkUsuarioPartida foreign key(idUsuario) references cadastro(idCadastro),
constraint fkQuizPartida foreign key(idQuiz) references quiz(idQuiz),
tempo int,
pontuacao int
);

select * from partida;


/*insert into quiz(pergunta, resposta) values
	('Qual é o nome oficial do festival onde o jogo Forza Horizon 1 se passa?','Horizon Festival'),
    ('Qual carro é utilizado na corrida de introdução (prólogo) do Forza Horizon 1?','Lamborghini Gallardo LP570-4 Superleggera'),
    ('Qual destes fabricantes NÃO aparece com modelos jogáveis no Forza Horizon 1 base (sem DLC)?','Toyota'),
    ('Em Forza Horizon 1, quantos níveis de pulseira (bracelet) existem que determinam o progresso do jogador?','6'),
    ('Qual a cidade fictícia central do mapa de Forza Horizon 1?','Redrock'),
    ('Qual é o nome do personagem que serve como principal rival do jogador durante a maior parte do jogo?','Darius Flynt'),
    ('Em Forza Horizon 1, qual destes eventos é obrigatório para a progressão principal?','Showcase Events'),
    ('Quantos carros secretos (Barn Finds) podem ser descobertos em Forza Horizon 1?','9'),
    ('Qual desses carros foi incluído como parte do \"October Car Pack\" DLC para Forza Horizon 1?','2012 Aston Martin Vanquish'),
    ('Qual destas bandas NÃO faz parte da trilha sonora oficial do Forza Horizon 1?','Imagine Dragons');
*/
/* Create table tracao(
idTracao INT PRIMARY KEY AUTO_INCREMENT,
tipo CHAR(3),
imgTracao VARCHAR(150)
);

INSERT INTO tracao (tipo, imgTracao) VALUES 
('RWD', 'imagens/classe-tracao/tracao-trazeira.png'),
('AWD', 'imagens/classe-tracao/4x4.png'),
('DWD', 'imagens/classe-tracao/tracao-dianteira.png');
-- Suponha que isso gerou idTracao = 1

create table sistemaDinamico(
idSistemaDinamico INT PRIMARY KEY AUTO_INCREMENT,
velocidade DECIMAL(3,1),
controle DECIMAL(3,1),
aceleracao DECIMAL(3,1),
arrancada DECIMAL(3,1),
frenagem DECIMAL(3,1)
);

INSERT INTO sistemaDinamico (velocidade, controle, aceleracao, arrancada, frenagem) VALUES
BMW M3-GTR
Nissan Silvia Spec-R
Lancer Evo X
Subaru WRX STi
Toyota Supra RZ
Mazda RX-7
Volkswagen Golf GTI MK2
Mini Cooper S
Toyota Sprinter Trueno
Mazda MX-5 Miata

Mercedes SL 65 AMG

Chevrolet Camaro ZL1

Dodge Challenger SRT8 392

Ford Mustang Boss 429

Peugeot 205 Turbo 16

Lancia Delta Integrale EVO

Viper SRT10 ACR-X
Lamborghini Miura P400
Mitsubishi Lancer Evolution X GSR
Honda NSX R-GT
Lotus Exige Cup 240
Aston Martin ONE-77
Audi R8 GT COUPE
BMW M3 GTR
Nissan GTR Black Edition
Corvette ZR1

Ferrari 250 GTO

Pagani Huayra

Hennessey Venom GT

Enzo Ferrari

Mercedes SLS AMG
Alfa Romeu 8C Competizione
Alfa Romeu TZ3 Stradale Zagato
Ascari KZ1R
Aston Martin DB5 Vantage
Aston Martin DB5

Shelby Cobra

Impreza 22B STi

Mazda RX-7

McLaren F1

Abarth 500
(Nissan Skyline GTR-R)
(Toyota Supra RZ)
(Camaro SS)
(Dodge Charger R/T-SE)
(Mustang Boss 302)

Pagani Zonda R

Koenigsegg Agera

Ford GT

Audi Sport Quattro

Lancia Stratos HF Stradale

Viper GTS

Ferrari F40

Ferrari 458 Italia

Bugatti Veyron

Lamborghini Aventador


create table veiculo(
idVeiculo INT primary key auto_increment,
marca VARCHAR(200),
modelo VARCHAR(200),
ano	INT,
classe VARCHAR(45),
logo VARCHAR(200),
imgVeiculo VARCHAR(200),
nivel VARCHAR(200),
preco DECIMAL,
linkDashboard VARCHAR(200),
fkSistemaDinamico INT,
constraint fkSistemaVeiculo foreign key(fkSistemaDinamico) references sistemaDinamico(idSistemaDinamico),
fkTracao INT,
constraint fkTracaoVeiculo foreign key(fkTracao) references tracao(idTracao)
);

INSERT INTO veiculo (marca, modelo, ano, classe, logo, imgVeiculo, nivel, preco, linkDashboard, fkSistemaDinamico, fkTracao) VALUES
('BMW', 'M3-GTR', 2006, 'S', 'imagens/logo/bmw.png', 'imagens/cars/m3-gtr.png', 'Alta', 95000, 'dashboard/m3-gtr.html', 1, 1),
('Nissan', 'Silvia Spec-R', 2002, 'A', 'imagens/logo/nissan.png', 'imagens/cars/silvia.png', 'Média', 45000, 'dashboard/silvia.html', 2, 1),
('Mitsubishi', 'Lancer Evolution X', 2008, 'A', 'imagens/logo/mitsubishi.png', 'imagens/cars/lancer.png', 'Alta', 65000, 'dashboard/lancer.html', 3, 2),
('Subaru', 'WRX STi', 2008, 'A', 'imagens/logo/subaru.png', 'imagens/cars/wrx.png', 'Alta', 62000, 'dashboard/wrx.html', 4, 2),
('Toyota', 'Supra RZ', 1998, 'A', 'imagens/logo/toyota.png', 'imagens/cars/supra.png', 'Alta', 70000, 'dashboard/supra.html', 5, 1),
('Mazda', 'RX-7', 1997, 'A', 'imagens/logo/mazda.png', 'imagens/cars/rx7.png', 'Média', 60000, 'dashboard/rx7.html', 6, 1),
('Volkswagen', 'Golf GTI 16v MK2', 1992, 'HATCHBACK', 'imagens/volkswagen/logo-volkswagen.png', 'imagens/volkswagen/golfgti.png', 'imagens/classe-tracao/niveis/d-387.png', 20000, 'dashboard/golfgti.html', 7, 3),
('Mini', 'Cooper S', 1965, 'ECONOMY', 'imagens/mini/logo-mini.png', 'imagens/mini/s.png', 'imagens/classe-tracao/niveis/e-171.png', 20000, 'dashboard/minicoopers.html', 8, 3),
('Toyota', 'Sprinter Trueno GT Apex', 1985, 'SPORT CAR', 'imagens/toyota/logo-toyota.png', 'imagens/toyota/sprinter.png', 'imagens/classe-tracao/niveis/d-273.png', 6000, 'dashboard/trueno.html', 9, 1),
('Mazda', 'MX-5 Miata', 1994, 'SPORT CAR', 'imagens/mazda/logo-mazda.png', 'imagens/mazda/miata.png', 'imagens/classe-tracao/niveis/e-226.png', 7000, 'dashboard/miata.html', 10, 1),
('Mercedes-Benz', 'SL 65 AMG Black Series', 2009, 'SUPER GT', 'imagens/mercedes/logo-mercedes.png', 'imagens/mercedes/sl65amg.png', 'imagens/classe-tracao/niveis/s-563.png', 195000, 'dashboard/sl65amg.html', 11, 1),
('Chevrolet', 'Camaro ZL1', 2012, 'SPORT CARS', 'imagens/chevrolet/logo-chevrolet.png', 'imagens/chevrolet/zl1.png', 'imagens/classe-tracao/niveis/s-579.png', 45000, 'dashboard/camaro-zl1.html', 12, 1),
('Dodge', 'Challenger SRT8 392', 2012, 'SPORT CARS', 'imagens/dodge/logo-dodge.png', 'imagens/dodge/challengersrt8.png', 'imagens/classe-tracao/niveis/s-507.png', 45000, 'dashboard/challenger-srt8.html', 13, 1),
('Ford', 'Mustang Boss 429', 1970, 'SPORT CARS', 'imagens/ford/logo-ford.png', 'imagens/ford/mustang/boss429.png', 'imagens/classe-tracao/niveis/d-380.png', 120000, 'dashboard/mustang-boss429.html', 14, 1),
('Peugeot', '205 Turbo 16', 1984, 'HATCHBACK', 'imagens/peugeot/logo-peugeot.png', 'imagens/peugeot/205turbo.png', 'imagens/classe-tracao/niveis/c-333.png', 120000, 'dashboard/peugeot-205.html', 15, 2),
('Lancia', 'Delta Integrale EVO', 1992, 'HATCHBACK', 'imagens/lancia/logo-lancia.png', 'imagens/lancia/deltaevo.png', 'imagens/classe-tracao/niveis/c-335.png', 22000, 'dashboard/lancia-delta.html', 16, 2),
('Viper', 'SRT10 ACR-X', 2010, 'SUPERCAR', 'imagens/viper/logo-viper.png', 'imagens/viper/srt10.png', 'imagens/classe-tracao/niveis/R3-800.png', 100000, 'dashboard/srt10.html',  17, 1),
('Lamborghini', 'Miura P400', 1967, 'RACE CLASSICS', 'imagens/lamborghini/logo-lamborghini.png', 'imagens/lamborghini/miura.png', 'imagens/classe-tracao/niveis/c-385.png', NULL, 'dashboard/miura.html', 18, 1),
('Mitsubishi', 'Lancer Evolution X GSR', 2008, 'SALOON', 'imagens/mitsubishi/logo-mitsubishi.png', 'imagens/mitsubishi/lancer.png', 'imagens/classe-tracao/niveis/b-437.png', 29000, 'dashboard/lancer.html', 19, 2),
('Honda', 'NSX R-GT', 2005, 'SPORTCAR', 'imagens/honda/logo-honda.png', 'imagens/honda/nsxR-gt.png', 'imagens/classe-tracao/niveis/s-541.png', 400000, 'dashboard/nsxR-gt.html', 20, 1),
('Lotus', 'Exige Cup 240', 2006, 'SUPERLIGHT', 'imagens/lotus/logo-lotus.png', 'imagens/lotus/exigecup.png', 'imagens/classe-tracao/niveis/a-528.png', 32000, 'dashboard/exige.html', 21, 1),
('Aston Martin', 'ONE-77', 2010, 'SUPER CAR', 'imagens/astonmartin/logo-astommartin.png', 'imagens/astonmartin/one77.png', 'imagens/classe-tracao/niveis/s-692.png', 960000, 'dashboard/one77.html', 22, 1),
('Audi', 'R8 GT COUPE', 2011, 'SUPER CARS', 'imagens/audi/logo-audi.png', 'imagens/audi/r8Coupe.png', 'imagens/classe-tracao/niveis/s-648.png', 195000, 'dashboard/r8Coupe.html', 23, 1),
('BMW', 'M3 GTR', 2002, 'SUPER CARS', 'imagens/bmw/logo-bmw.png', 'imagens/bmw/m3GTR.png', 'imagens/classe-tracao/niveis/a-568.png', 120000, 'dashboard/m3GTR.html', 24, 1),
('Nissan', 'GTR Black Edition', 2012, 'SPORT CARS', 'imagens/nissan/logo-gtr.png', 'imagens/nissan/gtrBlackEdition.png', 'imagens/classe-tracao/niveis/s-662.png', 120000, 'dashboard/gtrBlackEdition.html', 25, 1),
('Chevrolet', 'Corvette ZR1', 2009, 'MODERN MUSCLE', 'imagens/chevrolet/logo-chevrolet.png', 'imagens/chevrolet/zr1.png', 'imagens/classe-tracao/niveis/s-658.png', 100000, 'dashboard/zr1.html', 11, 1),
('Ferrari', '250 GTO', 1964, 'SPORT CARS', 'imagens/ferrari/logo-ferrari.png', 'imagens/ferrari/gto.png', 'imagens/classe-tracao/niveis/b-439.png', 10000000, 'dashboard/gto.html', 26, 1),
('Pagani', 'Huayra', 2012, 'HYPERCARS', 'imagens/pagani/logo-pagani.png', 'imagens/pagani/huayra.png', 'imagens/classe-tracao/niveis/r3-748.png', 1800000, 'dashboard/huayra.html', 27, 1),
('Hennessey', 'Venom GT', 2012, 'SUPER CARS', 'imagens/hennessey/logo-hennessey.png', 'imagens/hennessey/venonGT.png', 'imagens/classe-tracao/niveis/r2-894.png', 1000000, 'dashboard/venomGT.html', 28, 1),
('Ferrari', 'Enzo Ferrari', 2002, 'SUPER CARS', 'imagens/ferrari/logo-ferrari.png', 'imagens/ferrari/enzo.png', 'imagens/classe-tracao/niveis/r3-728.png', 1300000, 'dashboard/enzo.html', 29, 1),
('Mercedes-benz', 'SLS AMG', 2011, 'SUPER CARS', 'imagens/mercedes/logo-mercedes.png', 'imagens/mercedes/slsAMG.png', 'imagens/classe-tracao/niveis/s-641.png', 270000, 'dashboard/slsAMG.html', 30, 1),
('Alfa Romeu', '8C Competizione', 2007, 'SPORT CAR', 'imagens/alfaromeu/logo-alfaromeu.png', 'imagens/alfaromeu/A8C.png', 'imagens/classe-tracao/niveis/a-576.png', 280000, 'dashboard/8c.html', 31, 1),
('Alfa Romeu', 'TZ3 Stradale Zagato', 2011, 'SPORT CAR', 'imagens/alfaromeu/logo-alfaromeu.png', 'imagens/alfaromeu/t23.png', 'imagens/classe-tracao/niveis/s-664.png', 600000, 'dashboard/tz3.html', 32, 3),
('Ascari', 'KZ1R', 2012, 'SUPERCAR', 'imagens/ascari/logo-ascari.png', 'imagens/ascari/kz1r.png', 'imagens/classe-tracao/niveis/s-642.png', 350000, 'dashboard/kz1r.html', 33, 1),
('Aston Martin', 'DB5 Vantage', 1964, 'SUPERCAR', 'imagens/astonmartin/logo-astommartin.png', 'imagens/astonmartin/dbsVantage.png', 'imagens/classe-tracao/niveis/c-315.png', NULL, 'dashboard/db5vantage.html', 34, 1),
('Aston Martin', 'DB5', 2008, 'SPORT CARS', 'imagens/astonmartin/logo-astommartin.png', 'imagens/astonmartin/dbs.png', 'imagens/classe-tracao/niveis/a-556.png', 250000, 'dashboard/db5.html', 35, 1),
('Ford', 'Shelby Cobra 427 S/C', 1965, 'OPEN TOP', 'imagens/ford/logo-ford.png', 'imagens/ford/shelby/cobra.png', 'imagens/classe-tracao/niveis/b-694.png', 900000, 'dashboard/shelby.html', 36, 1),
('Subaru', 'Impreza 22B STi', 1998, '96s RALLY', 'imagens/subaru/logo-subaru.png', 'imagens/subaru/impreza.png', 'imagens/classe-tracao/niveis/b-424.png', 35000, 'dashboard/impreza.html', 37, 2),
('Mazda', 'rx-7', 1997, 'SPORTS CARS', 'imagens/mazda/logo-mazda.png', 'imagens/mazda/rx-7.png', 'imagens/classe-tracao/niveis/b-445.png', 18000, 'dashboard/rx7.html', 38, 1),
('Mclaren', 'F1', 1993, 'SPORTS CARS', 'imagens/mclaren/logo-mclaren.png', 'imagens/mclaren/f1.png', 'imagens/classe-tracao/niveis/s-692.png', 1500000, 'dashboard/f1.html', 39, 1),
('Abarth', '500 esseesse', 2010, 'Hot Hatch', 'imagens/abarth/logo-abarth.png', 'imagens/abarth/500.png', 'imagens/classe-tracao/niveis/c-526.png', 20000, 'dashboard/abarth.html', 40, 3),
('Nissan', 'Skyline GTR-R', 2000, 'SPORT CARS', 'imagens/nissan/logo-gtr.png', 'imagens/nissan/nissan-gtr.png', 'imagens/classe-tracao/niveis/b-461.png', 52000.00, 'dashboard/nissan-gtr.html', 41, 2),
('Toyota', 'Supra RZ', 2013, 'SPORT CARS', 'imagens/toyota/logo-toyota.png', 'imagens/toyota/supra-rz.png', 'imagens/classe-tracao/niveis/b-464.png', 8000.00, 'dashboard/supraRZ.html', 42, 1),
('Chevrolet', 'Camaro SS', 1969, 'SPORT CARS', 'imagens/chevrolet/logo-chevrolet.png', 'imagens/chevrolet/camaroSS.png', 'imagens/classe-tracao/niveis/d-291.png', 45000.00, 'dashboard/camaroSS.html', 43, 1),
('Dodge', 'Charge R/T-SE', 1969, 'SPORT CARS', 'imagens/dodge/logo-dodge.png', 'imagens/dodge/charge.png', 'imagens/classe-tracao/niveis/d-288.png', 64000.00, 'dashboard/charge.html', 44, 1),
('Ford', 'Mustang Boss 302', 2013, 'SPORT CARS', 'imagens/ford/logo-ford.png', 'imagens/ford/mustang/mustang.png', 'imagens/classe-tracao/niveis/a-544.png', 42000.00, 'dashboard/mustang.html', 45, 1),
('Pagani', 'Zonda R', 2010, 'SUPER CARS', 'imagens/pagani/logo-pagani.png', 'imagens/pagani/zonda.png', 'imagens/classe-tracao/niveis/r1-961.png', 1700000, 'dashboard/zonda-r.html', 46, 1),
('Koenigsegg', 'Agera', 2011, 'SUPER CARS', 'imagens/Koenigsegg/logo-koenigsegg.png', 'imagens/Koenigsegg/azera.png', 'imagens/classe-tracao/niveis/r2-815.png', 1400000, 'dashboard/agera.html', 47, 1),
('Ford', 'GT', 2005, 'SUPER CARS', 'imagens/ford/logo-ford.png', 'imagens/ford/gt/fordGT.png', 'imagens/classe-tracao/niveis/a-593.png', 150000, 'dashboard/gt.html', 48, 1),
('Audi', 'Sport Quattro', 1983, 'SPORTS CARS', 'imagens/audi/logo-audi.png', 'imagens/audi/sportQuattro.png', 'imagens/classe-tracao/niveis/b-434.png', 120000, 'dashboard/sport-quattro.html', 49, 2),
('Lancia', 'Stratos HF Stradale', 1974, 'SPORTS CARS', 'imagens/lancia/logo-lancia.png','imagens/lancia/lancia.png', 'imagens/classe-tracao/niveis/c-329.png', 50000, 'dashboard/stratos.html', 50, 2),
('Viper', 'GTS', 2013, 'SUPER CARS', 'imagens/viper/logo-viper.png', 'imagens/viper/viper-gts.png', 'imagens/classe-tracao/niveis/r3-800.png', 110000, 'dashboard/viperGTS.html', 51, 1),
('Ferrari', 'F40', 1987, 'SUPER CARS', 'imagens/ferrari/logo-ferrari.png', 'imagens/ferrari/f40/f40.png', 'imagens/classe-tracao/niveis/s-632.png', 8000000, 'dashboard/ferrafiF40.html', 52, 1),
('Ferrari', '458 Italia', 2009, 'SUPER CARS', 'imagens/ferrari/logo-ferrari.png', 'imagens/ferrari/458/458.png', 'imagens/classe-tracao/niveis/s-672.png', 240000, 'dashboard/ferrari458.html', 53, 1),
('Bugatti', 'Veyron Super Sport', 2011, 'SUPER CARS', 'imagens/bugatti/logo-bugatti.png', 'imagens/bugatti/bugatti-veyron.png', 'imagens/classe-tracao/niveis/r2-900.png', 2200000, 'dashboard/bugatti.html', 54, 2),
('Lamborghini', 'Aventador LP700-4', 2012, 'SUPER CARS', 'imagens/lamborghini/logo-lamborghini.png', 'imagens/lamborghini/lambo-aventador.png', 'imagens/classe-tracao/niveis/r3-725.png', 400000, 'dashboard/aventador.html', 55, 2);


create table favorito(
idFavorito int,
fkUsuario int,
fkVeiculo int,
constraint pktripla primary key(idFavorito, fkUsuario, fkVeiculo),
constraint fkFavoritoUsuario foreign key(fkUsuario) references cadastro(idCadastro),
constraint fkFavoritoVeiculo foreign key(fkVeiculo) references veiculo(idVeiculo)
);
*/


