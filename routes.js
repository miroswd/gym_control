// Configuração de rotas
const express = require('express')
const routes = express.Router() // Método que faz a variável ser responsável pelas rotas


routes.get('/', function(req,res){
  return res.send('Salve')
})


module.exports = routes // Exporta as configurações das rotas