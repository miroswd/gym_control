const express = require('express');

const routes = require('./routes')

const server = express()


server.use(routes) // Permite o servidor usar as rotas

// Listening
server.listen(3333,function(){
  console.log('rodou')
})