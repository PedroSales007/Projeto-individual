// Importa o model que tem as funções que fazem a lógica com o banco
var kpiModel = require('../models/kpiModel');

// Função para adicionar partida e incrementar tentativas
function pucharKPI(req, res) {
    var idUsuario = req.params.idUsuario
    
    if(idUsuario == undefined){
        console.log('Id do usuario não encontrado')
    } else{
        
    }
    kpiModel.pucharKPI(idUsuario) 
    .then(function(resultado){
        res.json(resultado)
    }
)
        
}

// Exporta as funções para uso nas rotas
module.exports = {
    pucharKPI
};
