require('dotenv').config()

const server = require('./api/server')
const defaults = require('./config/defaults')

const port = defaults.port
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})