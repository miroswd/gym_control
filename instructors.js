const fs = require('fs') // Module do node -> FileSystem
const data = require('./data.json')
// Create
exports.post = function(req,res){
    // Tornando todos os campos obrigatórios
    const keys = Object.keys(req.body) // Pega apenas as chaves do objeto
              // Constructor -> Uma função que criará um objeto
  
    // if (req.body.name == ''){
    //   return res.send('Fill in the name correctly')
    // }
  
    for (key of keys) {
      console.log(req.body[key])
      if (req.body[key] == ''){
        return res.send('Please fill in all fields')
      }
    }
    
   // Desestruturando
    
   let {avatar_url, birth, name, services, genre} = req.body

   birth = Date.parse(birth) // Transformando em time stamps
   const created_at = Date.now() // Criando a data de cadastro
   const id = Number(data.instructors.length + 1)

    data.instructors.push({
      id,
      avatar_url,
      name,
      birth,
      genre,
      services,
      created_at
    })
                                                // Pulando um campo, formatação        
    fs.writeFile('data.json', JSON.stringify(data,null,2),function(err){
        // Calback Function -> Função executada depois de alguma coisa, impede o bloqueio da aplicação   
        if (err) {
          return res.send("Write file error")
        }

        return res.redirect('/instructors')
      }) // Escrever o arquivo 

    //  return res.send(req.body)
} 

// Update