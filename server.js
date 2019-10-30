// * SETTINGS & PKGS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();
const settings = [express.json(), morgan('combined'), helmet()]

// * MIDDLEWARE-EXPRESS ROUTERS
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');

// * BASE MIDDLEWARE
server.use(settings);

// * ROUTES
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware
function logger(req, res, next) {

};

module.exports = server;
