const express = require('express');
const nunjucks = require('nunjucks');

const routes = require('./routes');

// "PONTO A"
// Middlewares --> Tudo q está no meio do caminho, entre o ponto A e B
const server = express()

server.use(express.static('./public'))


server.set('view engine','njk');

nunjucks.configure('views',{
  express:server,
  noCache: true
})

server.use(routes) // Permite o servidor usar as rotas


// "PONTO B"
// Listening - Colocando o servidor online
server.listen(3333,function(){
  console.log('Rodaaaaaaandooo MAOÊ')
})