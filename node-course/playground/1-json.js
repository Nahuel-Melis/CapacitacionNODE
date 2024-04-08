const fs = require('fs')
const { domainToASCII } = require('url')

const book = {
    title: "PINGAS!",
    Resumen: "Pingas."

}

const bookJSON = JSON.stringify(book)

//fs.writeFileSync('1-json.json',bookJSON) // genera archivo 1-json de tipo json y guarda el string en formato json en el mismo

//console.log(bookJSON)
//console.log(JSON.parse(bookJSON))

/*
const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const dataObject = JSON.parse(dataString)

console.log(dataObject.title)
*/

// --- Leer de archivo --- 

var dataBuffer = fs.readFileSync('1-json.json')
var dataString = dataBuffer.toString()
var dataObject = JSON.parse(dataString)

console.log('Objeto JSON leido del archivo:')
console.log(dataObject)
dataObject.name = 'Nahuel'
dataObject.age = 29

console.log('Objeto JSON modificado:')
console.log(dataObject)

fs.writeFileSync('1-json.json',JSON.stringify(dataObject))