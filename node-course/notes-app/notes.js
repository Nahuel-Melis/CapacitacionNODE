const fs = require('fs') 
const chalk = require('chalk')

const listNotes = () => loadNotes()


const addNote = (title,body) => {
    const notes = loadNotes()

    /* --- metodo rapido de escribir pero no optimizado, recorre todo
    const duplicateNotes = notes.filter((note) => note.Title === title)

    if (duplicateNotes.length == 0){
        notes.push({
            Title: title,
            Body: body
        })
    
        saveNotes(notes)
    }else{
        console.log('Ya existe una nota con ese Titulo. Cagaste Light.')
    }*/

    const duplicateNote = notes.find( (note) => note.Title === title )

    //notes.push( (duplicateNote === undefined) ? {Title: title, Body: body} : null ) funciona, pero push siempre mete algun dato por mas que sea nulo o vacio
    if (duplicateNote === undefined){ 
        notes.push({
            Title: title,
            Body: body
        })
    
        saveNotes(notes)
    }
    
}

const loadNotes =  () => {
    try {  
        const dataBuffer = fs.readFileSync('notas.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)
    } catch (e) {
        console.log('Cagaste Light.')
        return  []
    }
}

const saveNotes = (notes) => fs.writeFileSync('notas.json',JSON.stringify(notes))


const removeNote = (title) => {
    const notes = loadNotes()
    const notasDifTitle = notes.filter( (note) => (note.Title !== title) )
    if (notasDifTitle.length == notes.length){
        console.log('No se encontro Nota con el Titulo "', title , '".', chalk.bgRed(' Cagaste Light.') )
    }else{
        saveNotes(notasDifTitle)
        console.log(chalk.bgGreen('Nota eliminada!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    const duplicateNote = notes.find( (note) => note.Title === title )

    /*if (duplicateNote === undefined){ // no hace falta chequear contra undefined, parece
        console.log(chalk.red('No se encontró la Nota ', title))
    } else {
        console.log(chalk.green(duplicateNote.Title))
        console.log(duplicateNote.Body)
    }*/
    if (duplicateNote){
        console.log(chalk.green(duplicateNote.Title))
        console.log(duplicateNote.Body)
        
    } else {
        console.log(chalk.red('No se encontró la Nota ', title))
    }
}


module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}
