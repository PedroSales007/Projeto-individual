var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM cadastro WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idCadastro, nome, email, senha FROM cadastro`;

  return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
  var instrucaoSql = `SELECT * FROM cadastro WHERE email = '${email}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(email) {
  var instrucaoSql = `INSERT INTO cadastro (email) VALUES ('${email}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorEmail, buscarPorId, cadastrar, listar };