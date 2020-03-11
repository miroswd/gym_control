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
  },
  date: function(timestamp){
    // O html espera uma data no formato yyyy-mm-dd
    const date = new Date(timestamp)

    // UTC -> Universal
    // yyyy
    const year = date.getUTCFullYear();


    // mm
    const month = `0${date.getUTCMonth() + 1}`.slice(-2); // 0 é janeiro, por isso acrescentar 1
    
    // dd
    const day = `0${date.getUTCDate()}`.slice(-2);

    // slice -> método para cortar/fatiar


    // return yyyy-mm-dd
    return `${year}-${month}-${day}` 
  }
}