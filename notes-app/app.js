const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// Yargs version
yargs.version('0.0.5')

// add todo
yargs.command({
    command: 'add',
    describe: 'Adds a new todo',
    handler: function () {
        console.log('Adding todo!')
    }
})

// add, remove, read, list 

console.log(yargs.argv)



