/*const square = function (x) {
 return x*x
}*/

/* -- funcion arrow
const square = (x) => {
    return x*x
}*/

//const square = (x) => x*x //funcion arror mas corta

/*const event = {
    name: 'Cumpleaños',
    guestList: ['Nahuel','Manolo','Pingocho'],
    printGuestList(){
        //this.guestList.forEach( function (guest) {console.log(guest, ' está atendiendo ', this.name)}) // no puede acceder al this, ya que funciones estandar acceden a SU PROPIO
        this.guestList.forEach( (guest) => {console.log(guest, ' está atendiendo ', this.name)})
    }
}*/

//console.log(event.printGuestList())

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

//---
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        //const incompleteTasks = this.tasks.filter( (task) => {return !(task.completed)} /* accede al this del padre */  )
        //const incompleteTasks = this.tasks.filter( (task) => !(task.completed) ) /* usa la sintaxis extra reducida */ 
        return this.tasks.filter( (task) => !(task.completed) ) // me ahorro todavia mas espacio
    }
}



console.log(tasks.getTasksToDo())