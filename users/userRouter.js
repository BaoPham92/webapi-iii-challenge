const express = require('express');
const router = express.Router();
const users = require('./userDb');

router.post('/', validateUser, async (req, res) => {
    const user = req.body;

    !!user === true &&
        await users.insert(user)
            .then(newUser => res.status(201).json(newUser))
            .catch(err => res.status(500).json({ errorMessage: "Not able to create user!" }))

    res.end()
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
    await users.get()
        .then(userList => res.status(200).json(userList))
        .catch(err => res.status(500).json({ errorMessage: "Not able to fetch list of users" }))

    res.end()
});

router.get('/:id', validateUserId, (req, res) => {
    res.status(200).json(req.user);
    res.end();
});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.delete('/:id', validateUserId, (req, res) => {

});

router.put('/:id', validateUserId, (req, res) => {

});

//custom middleware

async function validateUserId(req, res, next) {
    const id = req.params.id;

    !!id === true &&
        await users.getById(id)
            .then(user => {
                if (!!user === true) req.user = user
            })
            .catch(err => res.status(400).json({ message: "invalid user id" }))
    next();
};

function validateUser(req, res, next) {
    const user = req.body;

    if (!!user === false) {
        res.status(400).json({ message: "missing user data" });
    } else if (!!user.name === false) {
        res.status(400).json({ message: "missing required name field" });
    } else {
        next();
    }
};

function validatePost(req, res, next) {

};

module.exports = router;
