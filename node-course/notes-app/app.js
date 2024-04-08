const fs = require('fs') 
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')
const { argv } = require('process')
//fs.writeFileSync('notas.txt','PINGAS.')

//fs.appendFileSync('notas.txt','\nPingas.')

// --- 2 ---
/*const utils = require('./utils.js')
const notes = require('./notes.js')
const getNotes = require('./notes.js')

console.log(utils.name)
console.log(utils.add(2,3))

console.log(getNotes())

//tambien puedo asignar getNotes() a una var, la cual se genera como un string

const validator = require('validator')
console.log(validator.isEmail('nahuelmelis@yahoo.com'))
*/

// --- 3 ---
/*
console.log(chalk.green('PINGAS!'))
console.log(chalk.bgBlue(chalk.red(chalk.bold('Pingas.'))))
console.log(chalk.bgBlue.red('pingas.'))
*/

// --- 4: Entrada de argumentos ---
/*
console.log(process.argv) //imprime todo el arg
console.log(process.argv[2]) //imprime el primer parametro propiamente dicho

const command = process.argv[2]

if (command == 'add'){
    console.log('Agregar nota:')
}else if (command == 'remove'){
    console.log('Eliminando nota:')
}
*/

//#region 5: Parametros con yargs

//console.log(process.argv)
//console.log(yargs.argv)

// -- Agrego comandos
yargs.command({
    command: 'add',
    showInHelp: true,
    description: 'Agrega una nota',
    builder: {
        Title: { 
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        Body: {
            description: 'Note Body',
            demandOption: false,
            type: 'string'
        }
    },
    //handler: function(argv){ notes.addNote(argv.Title, argv.Body) }
    handler(argv){ notes.addNote(argv.Title, argv.Body) }
}).parse()
// ej de ejecucion: node app.js add --Title="PINGAS"
// o n

yargs.command({
    command: 'remove',
    showInHelp: true,
    description: 'Elimina una nota',
    builder: {
        Title: { 
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    //handler: function(argv){ notes.removeNote(argv.Title)}
    handler(argv) { notes.removeNote(argv.Title) }
}).parse()

yargs.command({
    command: 'list',
    showInHelp: true,
    description: 'Lista todas las notas',
    handler() { 
        console.log(chalk.green('Sus Notas:'))
        const allNotes = notes.listNotes()
        allNotes.forEach( (note) => console.log(note.Title))
    }
}).parse()

yargs.command({
    command: 'read',
    showInHelp: true,
    description: 'Lee una nota',
    builder: {
        Title: { 
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.readNote(argv.Title)} // HANDLER TIENE QUE TENER LOS ARGV COMO PARAMETRO
}).parse()

//yargs.command('PINGAS!', 'Pingas.' , function() {console.log('pingas.')} ).parse()
//#endregion

//#region Testeo
/*
console.log('Contenido de var process.argv : ')
console.log(process.argv)
console.log('---------------------------------')
*/

/*console.log('Contenido de yargs.parse :')
console.log(yargs.parse())
console.log('---------------------------------')
*/

/*
console.log('Contenido de yargs.help :')
console.log(yargs.help())
console.log('---------------------------------')
*/

/*
console.log('Contenido de yargs.help :')
console.log(yargs.c())
console.log('---------------------------------')
*/

//yargs.parse('--help') // identico a ejecutar node app.js --help

//#endregion

//#region 6: LectoEscritura a archivos



//#endregion