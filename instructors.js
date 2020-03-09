const fs = require('fs') // Module do node -> FileSystem
const data = require('./data.json')
const {age} = require('./utils')

// Show
exports.show = function(req,res){
  // req.query.id  -> ?id= 
  // req.body      -> Pega do formulário
  // req.params.id -> /:id
  
  const {id} = req.params

  const foundInstructor = data.instructors.find(function(instructor){
    return instructor.id == id // Se o instrutor.id for igual ao :id

  })
  if(!foundInstructor) return res.send("Instructor not found")


  const instructor = {
    ...foundInstructor, // Spread, espalhando o resto das informações
    // Correções 
    birth:age(foundInstructor.birth),
    services:foundInstructor.services.split(","), // No show.njk, é esperado um array, e no json tem uma string - precisa converter essa string para array
        // Split -> separa em posições do array, identificados pelo separador
    created_at:new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at)
  }


  return res.render("instructors/show", {instructor}) // Renderizando a página e mandando o instrutor referente ao id
}


// Create
exports.post = function(req,res){
    // Tornando todos os campos obrigatórios
    const keys = Object.keys(req.body) // Pega apenas as chaves do objeto
              // Constructor -> Uma função que criará um objeto
  
    // if (req.body.name == ''){
    //   return res.send('Fill in the name correctly')
    // }
  
    for (key of keys) {
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