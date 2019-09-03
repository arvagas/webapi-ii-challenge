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
    db.find()
    .then(posts => res.json(posts))
    .catch(err => {
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    db.findById(id)
    .then(post => {
        post && post.length ? res.json(post) : res.status(404).json({ message: "The post with the specified ID does not exist." })
    })
    .catch(err => {
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
})

router.get('/:id/comments', (req, res) => {
    const { id } = req.params

    db.findPostComments(id)
    .then(comments => {
        comments && comments.length ? res.json(comments) : res.status(404).json({ message: "The post with the specified ID does not exist." })
    })
    .catch(err => {
        res.status(500).json({ error: "The comments information could not be retrieved." })
    })
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