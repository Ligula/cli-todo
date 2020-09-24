const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

console.log(chalk.blue.inverse('Running app.js\n'))

// Yargs version
yargs.version('0.0.5')

// add todo
yargs.command({
    command: 'add',
    describe: 'adds a new todo',
    builder: {
        m: {
            describe: 'Todo message',
            demandOption: true,
            type: 'string'
        },
        p: {
            describe: 'Todo priority',
            type: 'number'
        }
    },
    handler: function (argv) {
        notes.addTodo(argv.m, argv.p)
    }
})

// remove todo 
yargs.command({
    command: 'rmv',
    describe: 'removes a todo',
    builder: {
        id: {
            describe: 'ID of todo to remove',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        notes.removeTodo(argv.id)
    }
})

// list todos
yargs.command({
    command: 'list',
    describe: 'lists todos',
    handler: function () {
        console.log('test')
    }
})

// read todos
yargs.command({
    command: 'read',
    describe: 'read todos',
    handler: function () {
        console.log('')
    }
})

yargs.parse()



