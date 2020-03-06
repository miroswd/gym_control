// Conceitos de tratativa de data

// Ano
// idade = anoAtual - anoNascimento

// Meses
// 11 - 12 = -1
// 11 - 11 = 0
// 12 - 11 = +1

// Dia
// 01 - 12 = -11
// 12 -12 = 0
// 13 - 12 = 1

// getDay == dia da semana
// getDate == dia do mês

// ============== //
// 977356800000
function age(timestamp){
    // Pegar a data atual
    const today = new Date() // Iniciando um novo objeto de data
    const birthDate = new Date(timestamp)
    

    // let -> A idade será alterada
    let age = today.getFullYear() /** ano todo */ - birthDate.getFullYear()
    
    // Verificar se o mês e dia são negativos, ou igual a zero, ou positivo
    const month = today.getMonth() - birthDate();

    // Só faço aniverário, quando atingir a data correta

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
        age = age - 1
    }

    return age
}
