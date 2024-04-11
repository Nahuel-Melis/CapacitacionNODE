const fs = require('fs') 

const loadKeyOpenWeatherMap =  () => {
    try {  
        const dataBuffer = fs.readFileSync('./Keys/KeyOpenWeatherMap.txt')
        const dataString = dataBuffer.toString()

        return dataString
    } catch (e) {
        console.log('Cagaste Light.')
        return  []
    }
}

module.exports = {
    loadKeyOpenWeatherMap: loadKeyOpenWeatherMap
}