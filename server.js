const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const routes = require('./routes');

// "PONTO A"
// Middlewares --> Tudo q está no meio do caminho, entre o ponto A e B
const server = express()

// Configurando express para ler o req.body
server.use(express.urlencoded({extended:true}))
server.use(express.static('./public'))
server.use(methodOverride('_method')) // sobrescreve o método
                                  // acessando o edit.nkj, chamando o parametro _method
server.use(routes) // Permite o servidor usar as rotas, manda para a rota correta

server.set('view engine','njk');

nunjucks.configure('views',{
  express:server,
  noCache: true
})



// "PONTO B"
// Listening - Colocando o servidor online
server.listen(3333,function(){
  console.log('Rodaaaaaaandooo MAOÊ')
})