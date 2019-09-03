const express = require('express')

const db = require('../data/db')

const router = express.Router()

// @@@@@@@@@@ POST requests @@@@@@@@@@
//POST new post
router.post('/', (req, res) => {
    const newPost = req.body

    if (newPost.title === undefined || newPost.contents ===undefined) {
        res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
        })
    } else {
        db.insert(newPost)
        .then(post => {
            res.status(201).json({ ...post , ...newPost })
        })
        .catch(err => {
            res.status(500).json({ error: "There was an error while saving the post to the database" })
        })
    }
})

//POST new comment on specific post
router.post('/:id/comments', (req, res) => {
    const { id } = req.params
    const newComment = req.body

    if (newComment.text === undefined) {
        res.status(400).json({ errorMessage: "Please provide text for the comment." })
    } else {
        db.findById(id)
        .then(post => {
            if (post && post.length) {
                db.insertComment(newComment)
                .then(comment => {
                    res.status(201).json({ ...comment, ...newComment })
                })
                .catch(err => {
                    res.status(500).json({ error: "There was an error while saving the comment to the database" })
                })
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        })
        .catch(err => {
            res.status(500).json({ error: "The post information could not be retrieved." })
        })
    }
})

// @@@@@@@@@@ GET requests @@@@@@@@@@
//Get all posts
router.get('/', (req, res) => {
    db.find()
    .then(posts => res.json(posts))
    .catch(err => {
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
})

//Get specific post
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

//Get comments from specific post
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

// @@@@@@@@@@ DELETE request @@@@@@@@@@
router.delete('/:id', (req, res) => {
    res.send('hello from the DELETE /api/posts/:id endpoint')
})

// @@@@@@@@@@ PUT request @@@@@@@@@@
router.put('/:id', (req, res) => {
    res.send('hello from the PUT /api/posts/:id endpoint')
})

module.exports = router