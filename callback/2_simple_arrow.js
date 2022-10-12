
// instalar dependencia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const exito = data => {
const tipos = JSON.parse(data).results
//recorrer el arreglo de tipos

tipos.forEach( function (element) {
    console.log(`Tipo: ${element.name}`)
    console.log(`----------------------------`)
});
}

const fallo = status =>{
console.log(status)
}

const url = "https://pokeapi.co/api/v2/type"

// funcion para conectar a una api publica

const get_data = (endpoint , exito , fallo) => {
    //crear el objeto de conexion 
    const h = new http()
    //abrir una conexin a la API
    h.open('GET', endpoint)
    //enviar a la request definida
    h.send() 
    //una vez recibida la response, tratar la info 
    h.onload = () =>{
        if(h.status === 200){
            exito(h.responseText)
        }else{
            fallo(h.status)
        }
        
    }

}

    //invocar

    get_data(url, exito , fallo )