const express = require('express')

const server = express()
server.use(express.json())

const postsRoutes = require('./postsRoutes')

server.use('/api/posts', postsRoutes)

//Hello World Test
server.get('/', (req,res) => {
    res.json('Hello World')
})

module.exports = server