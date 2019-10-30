const express = require('express');
const router = express.Router();
const users = require('./userDb');

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    users.get()
        .then(userList => res.status(200).json(userList))
        .catch(err => res.status(500).json({ errorMessage: "Not able to fetch list of users" }))
});

router.get('/:id', validateUserId, (req, res) => {
    res.status(200).json(req.user);
    res.end();
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

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

};

function validatePost(req, res, next) {

};

module.exports = router;
