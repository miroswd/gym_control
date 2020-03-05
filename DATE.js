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



// ============== //
// 977356800000
function age(timestamp){
    // Pegar a data atual
    const today = new Date() // Iniciando um novo objeto de data
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() /** ano todo */ - birthDate.getFullYear()
    
    // Verificar se o mês e dia são negativos, ou igual a zero, ou positivo
    const month = 

}
