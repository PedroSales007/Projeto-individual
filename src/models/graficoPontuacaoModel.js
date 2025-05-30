var database = require('../database/config');

function  graficoPontuacao(idUsuario) {
   console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function  graficoPontuacao():", idUsuario);

        var instrucaoSql = `
                    SELECT TRUNCATE(p.pontuacao,0) AS pontuacao
	                    FROM partida AS p join cadastro AS c
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
     graficoPontuacao
};

