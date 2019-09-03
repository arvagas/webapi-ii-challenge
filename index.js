const express = require('express')

const postsRoutes = require('./api/postsRoutes')

const server = express()

server.use(express.json())

//Hello World Test
server.get('/', (req,res) => {
    res.json('Hello World')
})

server.use('/api/posts', postsRoutes)

server.listen(5000,() => {
    console.log('Server is running at http://localhost:5000')
})