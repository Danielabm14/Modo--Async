
// instalar dependencia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest


const url = "https://pokeapi.co/api/v2/type"

// 1. funcion para conectar a una api publica

function get_data(endpoint , exito , fallo){
    let promise = new Promise(function(resolve , rejected){
  
    //2.crear el objeto de conexion 
    const h = new http()
    //3.abrir una conexin a la API
    h.open('GET', endpoint)
    //4.enviar a la request definida
    h.send() 
    //5.una vez recibida la response, tratar la info 
    h.onload = function(){
        if(h.status === 200){
        resolve(h.responseText)
    }else{
        rejected(h.status)
    }
    
}
    })
     return promise
}

const exito = data => {
    const tipos = JSON.parse(data).results
    //recorrer el arreglo de tipos
    
    tipos.forEach( function (element) {
        console.log(`Tipo: ${element.name}`)
        console.log(`----------------------------`)
    });
    }


    function fallo (status){
        console.log(status)
        }

  const f = async function(){
    try{
        let response =  await get_data(url)
        exito(response)
  }catch(status){
         fallo(status)
  }

}

  f()

