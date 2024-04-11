const request = require('request')
const Auth = require('./Auth.js')

//#region 1 - Presentacion Async 
/*console.log('Starting...')

setTimeout(() => console.log('Pingas 2s') , 2000)

setTimeout(() => console.log('Pingas YA') , 0) // corre DESPUES de "...Stopping.", porque tiene que ser removido del Callback QUeue por el Event loop, 
//lo que solo ocurre si el stack esta vacio (como hay mas código en el ejecutable, main() todavia no termino y sigue en el stack)

console.log('...Stopping.')*/
//#endregion 

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=' + Auth.loadKeyOpenWeatherMap()

request({url: url}, (error,response) => {

    const data = JSON.parse(response.body)

    console.log(data)
})