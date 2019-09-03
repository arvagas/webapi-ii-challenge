const express = require('express')

const db = require('../data/db')

const router = express.Router()

//POST requests
router.post('/', (req, res) => {
    res.send('hello from the POST /api/posts endpoint')
})

router.post('/:id/comments', (req, res) => {
    res.send('hello from the POST /api/posts/:id/comments endpoint')
})

//GET requests
router.get('/', (req, res) => {
    res.send('hello from the GET /api/posts endpoint')
})

router.get('/:id', (req, res) => {
    res.send('hello from the GET /api/posts/:id endpoint')
})

router.get('/:id/comments', (req, res) => {
    res.send('hello from the GET /api/posts/:id/comments endpoint')
})

//DELETE request
router.delete('/:id', (req, res) => {
    res.send('hello from the DELETE /api/posts/:id endpoint')
})

//PUT request
router.put('/:id', (req, res) => {
    res.send('hello from the PUT /api/posts/:id endpoint')
})

module.exports = router