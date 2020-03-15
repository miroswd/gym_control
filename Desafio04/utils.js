

module.exports = {

  age: function(timestamps){
    const today = new Date()
    const birthDate = new Date(timestamps)

    let age = today.getFullYear() - birthDate.getFullYear()

    let month = today.getMonth() - birthDate.getMonth()

    if ( month <= 0 && today.getDate() <= birthDate.getDate() ){
      age -= 1
    }
    return age
  },
  date: function(timestamps){
    const date = new Date(timestamps)
    
    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate() }`.slice(-2)
    return `${year}-${month}-${day}`
  },
  graduation: function(graduation){
    switch (graduation){
      case '0':
        return ('Complete High School')

      case '1':
        return ('Complete Higher School')

      case '2':
        return ('Masters Degree')

      case '3':
        return ('Doctorate Degree')
      
    }
  }


}