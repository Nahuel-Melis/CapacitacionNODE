//setTimeout( () => console.log('2 seconds are up') , 2000)

const names = ['Nahuel', 'Manuel','Pepe']

const shortNames = names.filter( (name) => {
    return name.length <= 4
} )

/* -- Version que no respeta asincronicidad
const geocode = (adress, callback) => {
    setTimeout( () => {
        const data = {
            lat: 0,
            lon: 0
        }
        return data
    }, 2000)
}

const data = geocode('Quilmes') //como geocode no devuelve nada (porque esta esperando al timeout), JS devuelve Undefined mientras el timeout sigue tickeando
console.log(data)
*/

/* -- Version que respeta asincronicidad
const geocode = (adress, callback) => {
    setTimeout( () => {
        const data = {
            lat: 0,
            lon: 0
        }
        callback(data) //
    }, 2000)
}

const data = geocode('Quilmes', (data) => {
    console.log(data)
}) //al definir una funcion callback, "inserto" una funcion con la cual quiero manejar la info recibida dentro de la funcion asincronica
*/


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = ( firstNum, secondNum, callback ) => {
    setTimeout( () => {
        result = firstNum + secondNum

        callback(result)
    } , 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})