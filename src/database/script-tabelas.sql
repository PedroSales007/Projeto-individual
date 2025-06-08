create database horizonGarage;
use horizonGarage;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50) not null,
email varchar(50) not null unique,
senha varchar(50) not null
);

create table quiz(
idQuiz int primary key auto_increment,
tentativas int,
fkUsuario int,
constraint fkQuizUsuario foreign key(fkUsuario) references usuario(idUsuario)
);

create table partida(
idPartida int auto_increment,
fkUsuario int,
fkQuiz int,
constraint triplaKey primary key(idPartida, fkUsuario, fkQuiz),
constraint fkUsuarioPartida foreign key(fkUsuario) references usuario(idUsuario),
constraint fkQuizPartida foreign key(fkQuiz) references quiz(idQuiz),
tempo int,
pontuacao int
);

-- Selecionando os usuarios e visualizando o tempo e pontuação por partida
select c.nome as usuario,
       p.tempo as tempo,
       p.pontuacao as pontuacao,
       q.tentativas as tentativa
	from partida as p join usuario as c
		on p.fkUsuario = c.idUsuario 
	join quiz as q
		on p.fkQuiz = q.idQuiz;

-- selecionando as tentativas feitas e apresentando apenas 1 Para KPI
 select q.tentativas as tentativa,
    q.idQuiz as idQuiz,
    truncate(avg(p.pontuacao), 0) as pontuacaoMedia,
    truncate(avg(p.tempo), 0) as tempoMedio
        from partida as p
        join usuario as u 
            on p.fkUsuario = u.idUsuario
        join quiz as q 
            on p.fkQuiz = q.idQuiz
        group by q.idQuiz, q.tentativas;


    
-- selecionando os ultimos 5 registros de pontuação Gráfico
 SELECT TRUNCATE(p.pontuacao,0) AS pontuacao
	FROM partida AS p join usuario AS u
		ON p.fkUsuario = u.idUsuario 
	JOIN quiz AS q 
		ON p.fkQuiz = q.idQuiz;



-- selecionado os ultimos 5 registros de tempo em cada partida Gráfico
 SELECT TRUNCATE(p.tempo,1) AS tempo
	FROM partida AS p JOIN usuario AS u
		ON p.fkUsuario = u.idUsuario 
	JOIN quiz AS q 
		ON p.fkQuiz = q.idQuiz;