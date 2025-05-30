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
idQuiz int primary key,
tentativas int
);

create table partida(
idPartida int auto_increment,
fkUsuario int,
fkQuiz int,
constraint triplaKey primary key(idPartida, fkUsuario, fkQuiz),
constraint fkUsuarioPartida foreign key(fkUsuario) references cadastro(idCadastro),
constraint fkQuizPartida foreign key(fkQuiz) references quiz(idQuiz),
tempo int,
pontuacao int
);

-- Selecionando os usuarios e visualizando o tempo e pontuação por partida
select c.nome as usuario,
       p.tempo as tempo,
       p.pontuacao as pontuacao,
       q.tentativas as tentativa
	from partida as p join cadastro as c
		on p.fkUsuario = c.idCadastro 
	join quiz as q
		on p.fkQuiz = q.idQuiz;

-- selecionando as tentativas feitas e apresentando apenas 1 Para KPI
select q.tentativas as tentativa,
       q.idQuiz as idQuiz,
       truncate(avg(p.pontuacao), 0) as pontuacao,
       truncate(avg(p.tempo), 0) as tempoMedia
from partida as p
join cadastro as c on p.fkUsuario = c.idCadastro
join quiz as q on p.fkQuiz = q.idQuiz
where p.fkUsuario = 6
group by q.idQuiz, q.tentativas;


    
-- selecionando os ultimos 5 registros de pontuação Gráfico
select truncate(p.pontuacao,0) as pontuacao
	from partida as p join cadastro as c
		on p.fkUsuario = c.idCadastro 
	join quiz as q 
		on p.fkQuiz = q.idQuiz
	where p.fkUsuario = 6;



-- selecionado os ultimos 5 registros de tempo em cada partida Gráfico
select truncate(p.tempo,1) as tempo
	from partida as p join cadastro as c
		on p.fkUsuario = c.idCadastro 
	join quiz as q 
		on p.fkQuiz = q.idQuiz
	where p.fkUsuario = 6;