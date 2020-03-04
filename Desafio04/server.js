const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()


server.use(express.urlencoded({extended:true}))
server.use(express.static('./public'))

server.set('view engine','njk')

nunjucks.configure('views',{
  express:server,
  noCache:true
})

server.use(routes)

// Listening 3333
server.listen(3333, console.log('Ta rodando'))