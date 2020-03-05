// Configuração de rotas
const express = require('express')
const routes = express.Router() // Método que faz a variável ser responsável pelas rotas

const instructors = require('./instructors')

routes.get('/', function(req,res){
  return res.redirect('/instructors') // Index redireciona para instructors
})


// Instructors
routes.get('/instructors', function(req,res){
  return res.render('instructors/index')
})

routes.get('/instructors/create', function(req,res){
  return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

// Post

routes.post('/instructors', instructors.post)

// Members
routes.get('/members',function(req,res){
  return res.send('members')
})


module.exports = routes // Exporta as configurações das rotas