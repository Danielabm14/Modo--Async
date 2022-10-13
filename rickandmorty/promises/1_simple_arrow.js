const axios = require('axios')


const url = "https://rickandmortyapi.com/api/character"

//configuracion de request axios

let config = {
    url : url,
    method: 'get'
}

// Realizar la operacion async

axios(config)
      .then(response => response.data.results)
      .then (data => { 
        data.forEach(function(tipo) {
            console.log(`name: ${tipo.species}`)
            console.log(`________________`)
        })
       })
      .catch((error)  => {
        console.log( Error (`Error: $error`))
      })