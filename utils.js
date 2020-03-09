module.exports = {
  age: function (timestamp){
    // Pegar a data atual
    const today = new Date() // Iniciando um novo objeto de data
    const birthDate = new Date(timestamp)
    
  
    // let -> A idade será alterada
    let age = today.getFullYear() /** ano todo */ - birthDate.getFullYear()
    
    // Verificar se o mês e dia são negativos, ou igual a zero, ou positivo
    const month = today.getMonth() - birthDate.getMonth();
  
    // Só faço aniverário, quando atingir a data correta
    if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()){
        age = age - 1
    }
  
    return age
  }
}