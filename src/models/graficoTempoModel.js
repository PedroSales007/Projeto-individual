var database = require('../database/config');

function  graficoTempo(idUsuario) {
   console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function  graficoTempo():", idUsuario);

        var instrucaoSql = `
                    SELECT TRUNCATE(p.tempo,1) AS tempo
	                    FROM partida AS p JOIN cadastro AS c
		                    ON p.fkUsuario = c.idCadastro 
	                    JOIN quiz AS q 
		                    ON p.fkQuiz = q.idQuiz
	                    WHERE p.fkUsuario = ${idUsuario};
                 `;
        console.log('Executando a instrução SQL: \n' + instrucaoSql);
        return database.executar(instrucaoSql);
}

// Exporta as funções para uso nas rotas
module.exports = {
     graficoTempo
};

