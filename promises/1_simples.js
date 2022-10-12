
// instalar dependencia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest


const url = "https://pokeapi.co/api/v2/type"

// 1. funcion para conectar a una api publica

function get_data(endpoint , exito , fallo){
    let promise = new Promise(function(resolve , rejected){
  
    //crear el objeto de conexion 
    const h = new http()
    //abrir una conexin a la API
    h.open('GET', endpoint)
    //enviar a la request definida
    h.send() 
    //una vez recibida la response, tratar la info 
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

get_data(url).then(function(data){
    exito(data)
})