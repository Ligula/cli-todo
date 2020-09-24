const chalk = require('chalk')
const fs = require('fs')

const getNotes = function() {
    return "Your notes"
}

//add date functionality 
const addTodo = function(message, priority) {
    const todos = loadTodos()

    const dupes = todos.filter(todo => todo.message === message)

    if(dupes.length === 0) {
        todos.push({
            id: todos.length+1,
            message: message,
            priority: priority
        })

        saveTodo(todos)

        var msg = chalk.green('Added todo ') + chalk.yellowBright.italic(message) + chalk.green()
        var priorityMsg = ''

        if(priority) {
            priorityMsg =  chalk.green(' with priority ') + chalk.red(priority)
        } 
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
        const dataJSON = JSON.stringify(todos)

        fs.writeFileSync('todos.json', dataJSON)

        console.log(chalk.green('Successfully removed todo ') + chalk.red(removedTodo[0].id) + " " + chalk.yellow(removedTodo[0].message))
    }
    else {
        console.log(chalk.red('ID does not exists! Run command list to see all todos'))
    }
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
    removeTodo: removeTodo
}