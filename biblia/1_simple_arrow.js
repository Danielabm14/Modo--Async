

// instalar dependencia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const exito = data => {
const text = JSON.parse(data).text
console.log(text)

//recorrer el arreglo de tipos
/*
tipos.forEach( function (element) {
    console.log(`Tipo: ${}`)
    console.log(`----------------------------`)
});
*/
}


const fallo = status =>{
console.log(status)
}

const url = "https://bible-api.com/john 3:16"

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