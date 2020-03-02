const usuarios = [ 
  { nome: 'Breno', tecnologias: ['html', 'node.js', 'javascript'] },
  { nome: 'Joao', tecnologias: ['css', 'html', 'javascript'] },
  { nome: 'Joao', tecnologias: ['css', 'html', 'javascript'] }, 
  { nome: 'Maria', tecnologias: ['css', 'html', 'python'] } ]

function verificarTec(tec) { 
  let tecnologia = ''
  for (let i = 0; i < tec.length; i++){
    
    
    tecnologias = tec[i].tecnologias

    for (let t = 0; t < tecnologias.length ; t++){
      
      tecnologia = tec[i].tecnologias[t]
      
      if (tecnologia == 'css'){
        console.log('Verdadeiro')          
      } else{
      console.log('Falso')
    }
    }    
        
}


}  

const tecno = verificarTec(usuarios)