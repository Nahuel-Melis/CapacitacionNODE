//const fs = require('fs') 

//fs.writeFileSync('notas.txt','PINGAS.')

//fs.appendFileSync('notas.txt','\nPingas.')

// --- 2 ---
const utils = require('./utils.js')
const notes = require('./notes.js')
const getNotes = require('./notes.js')

console.log(utils.name)
console.log(utils.add(2,3))

console.log(getNotes())
//tambien puedo asignar getNotes() a una var, la cual se genera como un string

const validator = require('validator')
console.log(validator.isEmail('nahuelmelis@yahoo.com'))


// --- 3 ---
const chalk = require('chalk')
console.log(chalk.green('PINGAS!'))
console.log(chalk.bgBlue(chalk.red(chalk.bold('Pingas.'))))
console.log(chalk.bgBlue.red('pingas.'))