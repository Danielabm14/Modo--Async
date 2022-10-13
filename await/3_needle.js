const needle = require('needle')

const url = "https://api.catboys.com/ping"

const f = async()=> {

    try {
        let response = await needle ('get' ,url)
        const tipos = response.body.catboy_says
      
    } catch (error) {
      console.log(Error(error))
    }
    
}

f()

