const request = require('request')
const Auth = require('../Auth.js')


const urlWeather = (lat, lon) => 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat.toString() + '&lon=' + lon.toString() +'&units=metric&appid=' + Auth.loadKeyOpenWeatherMap()

const forecast = (lat, lon, callback) => {
    if ( (typeof(lat) !== 'number') || (typeof(lon) !== 'number') ){
        callback('The values of latitude and longitude are invalid.', undefined)
    } else {
        const url = urlWeather(lat, lon)
        console.log(url)
        const data = request({url:url , json: true} , (error , response) => {
            if (error){
                callback(error,undefined)
            } else if (response.cod !== 200) {
                callback(undefined, response.body)
            }else {
                callback(undefined, response.body.weather[0])
            }
        } )
    }
}

module.exports = forecast // para exportar solo la funcion y no tener que accederla como propiedad de objeto.