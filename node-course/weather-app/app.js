const request = require('request')
const Auth = require('./Auth.js')
const geoCode = require('./utils/geoCode.js')
const forecast = require('./utils/forecast.js')

//#region 1 - Presentacion Async 
/*console.log('Starting...')

setTimeout(() => console.log('Pingas 2s') , 2000)

setTimeout(() => console.log('Pingas YA') , 0) // corre DESPUES de "...Stopping.", porque tiene que ser removido del Callback QUeue por el Event loop, 
//lo que solo ocurre si el stack esta vacio (como hay mas código en el ejecutable, main() todavia no termino y sigue en el stack)

console.log('...Stopping.')*/
//#endregion 

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.6075682&lon=-58.4370894&units=metric&appid=' + Auth.loadKeyOpenWeatherMap()

const urlGeoCoding = (ciudad = '', ZIP = '') => {
    if (ZIP === ''){
        return 'https://api.openweathermap.org/geo/1.0/direct?q="' + ciudad + '"&appid=' + Auth.loadKeyOpenWeatherMap()
    }else{
        return 'http://api.openweathermap.org/geo/1.0/zip?zip=' + ZIP + ',AR&appid=' + Auth.loadKeyOpenWeatherMap()
    }
    
}


/*
request({url: url, json: true}, (error,response) => {

    //const data = JSON.parse(response.body)

    //console.log(response.body)
    console.log(response.body.weather[0].description)
    console.log('It\'s currently ',response.body.main.temp, ' degrees out. It feels like ', response.body.main.feels_like , ' degrees out.')
    console.log()
})*/

debugger
/*request({url: urlGeoCoding('Las Toninas',''), json: true}, (error,response) => {
    //console.log(response.body)
    if (error){
        console.log('Unable to connect to GeoCoding API.')
    }else if (response.body.length == 0){
        console.log('No city with the name provided was found')
    }else try {
        if (response.body.cod == 401){
            response.body.cod
            console.log('Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.')
        }else{
            console.log(response.body[0].lat)
            console.log(response.body[0].lon)
        }       
    } catch (error) {
        console.log('Cagaste Light.')
    }
})*/

geoCode.geoCode('Las Toninas' , (error , response) => {
    if (error){
        console.log(error.error)
    }else{
        console.log(response)
    }
})


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(999, 999, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })