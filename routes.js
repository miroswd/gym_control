// Configuração de rotas
const express = require('express')
const routes = express.Router() // Método que faz a variável ser responsável pelas rotas


routes.get('/', function(req,res){
  return res.redirect('/instructors') // Index redireciona para instructors
})

routes.get('/instructors', function(req,res){
  return res.render('instructors/index')
})

routes.get('/members',function(req,res){
  return res.send('members')
})


module.exports = routes // Exporta as configurações das rotas