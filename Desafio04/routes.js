const express = require('express')
const routes = express.Router()

// Routes 
const teachers = require('./teachers')

routes.get('/', function(req,res){
  return res.redirect('teachers')
})

// === Teachers === //

// GET

routes.get('/teachers', function(req,res){
  return res.render('teachers/index')
})

routes.get('/teachers/create', function(req,res){
  return res.render('teachers/create')
})

routes.get('/teachers/:id', teachers.show)

// POST

routes.post('/teachers', teachers.post)

// UPDATE

routes.get('/teachers/:id/edit', teachers.edit)





// === Students === //

routes.get('/students', function(req,res){
  return res.render('students/index')
})

module.exports = routes