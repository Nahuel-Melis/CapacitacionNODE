const request = require('request')
const Auth = require('../Auth.js')

const urlGeoCoding = (ciudad = '', ZIP = '') => {
    if (ZIP === ''){
        return 'https://api.openweathermap.org/geo/1.0/direct?q="' + ciudad + '"&appid=' + Auth.loadKeyOpenWeatherMap()
    }else{
        return 'http://api.openweathermap.org/geo/1.0/zip?zip=' + ZIP + ',AR&appid=' + Auth.loadKeyOpenWeatherMap()
    }
    
}

const urlGeoCodingERROR_KEY = (ciudad = '', ZIP = '') => urlGeoCoding(ciudad,ZIP) + 'a'

const urlGeoCodingERROR_URL = (ciudad = '', ZIP = '') => urlGeoCoding(ciudad,ZIP).replace('eat','et')


const geoCode = (city , callback) => {
    const url = urlGeoCoding(encodeURIComponent(city))

    request( {url: url, json:true } , (error, response) => {
        if (error){
            callback(error, undefined)
        }else if (response.body.length == 0){
            callback({error: 'No city with the name provided was found'} , undefined)
        }else try {
            if (response.body.cod == 401){
                callback({error:'Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.'} , undefined)
            }else{
                callback( undefined , {lat : response.body[0].lat, lon: response.body[0].lon})
            }       
        } catch (error) {
            console.log('Cagaste Light.')
        }
    })
} 

module.exports = {
    geoCode: geoCode
}