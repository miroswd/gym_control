const express = require('express')
const routes = express.Router()

// Routes 
const teachers = require('./teachers')

routes.get('/', function(req,res){
  return res.redirect('teachers')
})

// === Teachers === //

routes.get('/teachers', function(req,res){
  return res.render('teachers/index')
})

routes.get('/teachers/create', function(req,res){
  return res.render('teachers/create')
})

// POST

routes.post('/teachers', teachers.post)


// === Students === //

routes.get('/students', function(req,res){
  return res.render('students/index')
})

module.exports = routes