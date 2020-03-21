const fs = require('fs') // Module do node -> FileSystem
const data = require('./data.json')
const {age, date} = require('./utils')

// Show
exports.show = function(req,res){
  // req.query.id  -> ?id= 
  // req.body      -> Pega do formulário
  // req.params.id -> /:id
  
  const {id} = req.params

  const foundInstructor = data.instructors.find(function(instructor){
    return id == instructor.id // Se o instrutor.id for igual ao :id

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

        return res.redirect(`/instructors/${id}`)
      }) // Escrever o arquivo 

    //  return res.send(req.body)
} 

// Edit - página para editar
exports.edit = function(req,res){
  const {id} = req.params;
  const foundInstructor = data.instructors.find(function(instructor){
      return id == instructor.id;
  })

  if(!foundInstructor) return res.send("Instructor nota found")

  const instructor = {
    ...foundInstructor,
    birth:date(foundInstructor.birth)
  }

  return res.render('instructors/edit',{instructor})
}

// Put - salvar o edit no backend 
exports.put = function(req,res){
  const {id} = req.body
  let index = 0

  const foundInstructor = data.instructors.find(function(instructor, foundIndex){
    if (id == instructor.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundInstructor) return res.send("Instructor nots found")

  const instructor = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth)
  }
  data.instructors[index] = instructor
  fs.writeFile("data.json", JSON.stringify(data,null,2), function(err){
    if(err) return res.send("Write error!")

    return res.redirect(`/instructors/${id}`)
  })
}

// Delete
exports.delete = function(req,res){
  const {id} = req.body

  // Filtra - estrutura de repetição
  // pra cada instrutor, roda a função, precisa retornar um boolean
  // tudo q for true, coloca dentro do array filteredInstructors
  const filteredInstructors = data.instructors.filter(function(instructor){
    return instructor.id != id // se for falso, tira do array
  })

  data.instructors = filteredInstructors

  fs.writeFile("data.json", JSON.stringify(data,null,2), function(err){
    if(err) return res.send("write file error!")

    return res.redirect('/instructors')
  })
}