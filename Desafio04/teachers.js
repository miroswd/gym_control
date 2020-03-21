const fs = require('fs')
const data = require('./data.json')
const {age, date, graduation} = require('./utils')


exports.post = function(req,res) {
  
  // Validate
  const keys = Object.keys(req.body)
  for (key of keys){
    if (req.body[key] == ""){
      return res.send('Fill in all fields')
    }
  }

  // let {avatar_url, name, birth, education, learning, segment} = req.body;

  birth = Date.parse(req.body.birth)
  
  const id = Number(data.teachers.length + 1)
  const created_at = Date.now()

  data.teachers.push({
    ...req.body,
    id,
    created_at
  })


  fs.writeFile('data.json', JSON.stringify(data,null,2), function(err){

    if(err) console.log(err)

    const foundTeacher = data.teachers.find(function(teacher){
      return id == teacher.id
    })

    return res.redirect(`/teachers/${foundTeacher.id}`)
  })

}

// Show

exports.show = function(req,res){

    const {id} = req.params
    const foundTeacher = data.teachers.find(function(teacher){
      return id == teacher.id;
    })

    if(!foundTeacher) return res.send("Teacher is not found")
    // const {avatar_url,name,birth,education,learning,segment,created_at} = data[id]

    const teacher = {
      ...foundTeacher,
      segment: foundTeacher.segment.split(","),
      birth:age(foundTeacher.birth),
      education:graduation(foundTeacher.education),
      created_at:new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }

    return res.render('teachers/show',{teacher})
  }


  // EDIT

  exports.edit = function(req,res){
    
    const {id} = req.params
    // validar se o id existe
    
    const foundTeacher = data.teachers.find(function(teacher){
      return id == teacher.id;
    })

    if(!foundTeacher){
      return res.send("Teacher not found")
    }

    const teacher = {
      id,
      ...foundTeacher,
      birth:date(foundTeacher.birth)
    }

    return res.render("teachers/edit",{teacher})

  }

  // PUT

 exports.update = function(req,res){
   const {id} = req.body
   let index = 0

   const foundTeacher = data.teachers.find(function(teacher,foundIndex){
     if (teacher.id == id){
      index = foundIndex;
      return true
      }
   })

   if (!foundTeacher) return res.send('Teacher not found')

   const teacher = {
     ...foundTeacher,
     ...req.body,
     birth:Date.parse(req.body.birth)
   }

   
   // Alterando dados
   data.teachers[index] = teacher
   
   fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
     if (err) return res.send("Write File error!")

     return res.redirect(`/teachers/${id}`)
   })

 }

 // Deletando

exports.delete = function(req,res){
  const {id} = req.body // Falta fazer o input hidden
  console.log(id)
  // Usar o filter -> add e remove do array
  
  const filteredTeachers = data.teachers.filter(function(teacher){
    console.log(teacher)
    return teacher.id != id
  })

  data.teachers = filteredTeachers

  fs.writeFile("data.json",JSON.stringify(data,null,2), function(err){
    if (err) return res.send("Write File error!")

    return res.redirect(`/teachers`)
  })
}