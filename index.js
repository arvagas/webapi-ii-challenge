const express = require('express')

const db = require('./data/db')

const server = express()

server.use(express.json())

//Hello World Test
server.get('/', (req,res) => {
    console.log('Hello World')
})

server.listen(5000,() => {
    console.log('Server is running at http://localhost:5000')
})