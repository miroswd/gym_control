const fs = require('fs')
const data = require('./data.json')


exports.post = function(req,res) {
  
  // Validate
  const keys = Object.keys(req.body)
  for (key of keys){
    if (req.body[key] == ""){
      return res.send('Fill in all fields')
    }
  }

  let {avatar_url, name, birth, education, learning, segment} = req.body;

  birth = Date.parse(birth)
  
  const id = Number(data.teachers.length + 1)
  const created_at = Date.now()

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    education,
    learning,
    segment,
    created_at
  })


  fs.writeFile('data.json', JSON.stringify(data,null,2), function(err){

    if(err) console.log(err)

    return res.redirect('/teachers')
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
    console.log(data)

    return res.render('teachers/show')
  }
