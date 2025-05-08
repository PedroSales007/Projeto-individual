var horizonModel = require("../models/horizonModel");

function buscarPorEmail(req, res) {
email = req.query.email;

  horizonModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  horizonModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  horizonModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var email = req.body.email;
  var id = req.body.id;

  horizonModel.buscarPorEmail(email).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a loja com o email ${email} já existe` });
    } else {
      horizonModel.cadastrar(id, email).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorEmail,
  buscarPorId,
  cadastrar,
  listar,
};