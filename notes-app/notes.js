const chalk = require('chalk')
const table = require('cli-table3')
const fs = require('fs')

const getNotes = function() {
    return "Your notes"
}

//add date functionality 
const addTodo = function(message, priority) {
    const todos = loadTodos()
    const dupes = todos.find(todo => todo.message === message)
    
    if(priority) {
        priorityMsg =  chalk.green(' with priority ') + chalk.red(priority)
    } else {
        priority = 99
    }

    if(!dupes) {
        todos.push({
            id: todos.length+1,
            message: message,
            priority: priority
        })

        saveTodo(todos)

        var msg = chalk.green('Added todo ') + chalk.yellowBright.italic(message) + chalk.green()
        var priorityMsg = ''


        console.log(msg + priorityMsg)
    }
    else {
        console.log(chalk.red("Todo already exists at given date!"))
    }
}

const removeTodo = function(id) {
    const todos = loadTodos()
    var removedTodo = todos.filter(todo => todo.id === id)

    if (removedTodo[0]) {
        const index = todos.indexOf(removedTodo[0])

        todos.splice(index, 1)
        saveTodo(todos)

        console.log(chalk.green('Successfully removed todo ') + chalk.red(removedTodo[0].id) + " " + chalk.yellow(removedTodo[0].message))
    }
    else {
        console.log(chalk.red('ID does not exists! Run command list to see all todos'))
    }
}

const listTodos = function() {
    const todos = loadTodos()

    todos.sort((a,b) => { 
        
        if(a.priority === null) {
            return 1;
        }
        else {
           return  a.priority - b.priority
        }
    })

    const tabl = new table({
        head: ['ID', 'Message', 'Priority'],
        colWidths: [10,20,10]
    })

    todos.forEach(todo => {
        tabl.push(
            [todo.id, todo.message, todo.priority]
        )
    })
        
    console.log(chalk.green(tabl.toString()))

}

const saveTodo = function(todos) {
    const dataJSON = JSON.stringify(todos)
    fs.writeFileSync('todos.json', dataJSON)
}

const loadTodos = function () {
    try {
        const dataBuffer = fs.readFileSync('todos.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addTodo: addTodo,
    removeTodo: removeTodo,
    listTodos: listTodos
}