const axios = require('axios')


const url = "https://pokeapi.co/api/v2/type"

//configuracion de request axios

let config = {
    url : url,
    method: 'get'
}


const f = async () => {
    try {
        let response = await axios(config)
        const tipos = response.data.results
      tipos.forEach((element) => {
        console.log(element.name)
        console.log('_______')
      });
    } catch (error) {
        console.log(Error(error))
    }

}


f()
