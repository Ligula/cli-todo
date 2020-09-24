const fs = require('fs')
// const book = {
//     title: 'Blah blah',
//     author: 'RYan HOliday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Jacob'
data.age = 23

const data_s = JSON.stringify(data)
fs.writeFileSync('1-json.json', data_s)

