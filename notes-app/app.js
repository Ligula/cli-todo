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
        var msg = chalk.green('Added todo ') + chalk.yellowBright.italic(argv.m) + chalk.green()
        var priority = ''

        if(argv.p) {
            priority =  chalk.green(' with priority ') + chalk.red(argv.p)
        } 
        console.log(msg + priority )
    }
})

// remove todo 
yargs.command({
    command: 'remove',
    describe: 'removes a todo',
    handler: function () {
        console.log(chalk.red('Removing todo!'))
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



