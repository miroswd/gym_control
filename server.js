const express = require('express');

const server = express()



server.get('/',function(req,res){
  return res.send('Bom dia')
})



// Listening
server.listen(3333,function(){
  console.log('rodou')
})