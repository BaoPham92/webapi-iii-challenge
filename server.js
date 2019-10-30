// * SETTINGS & PKGS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();

//custom middleware
function logger(req, res, next) {
  console.log(`Logger is logging the method: ${req.method} to URL: ${req.url}`);
  next();
};

// * MIDDLEWARE-EXPRESS ROUTERS
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');

// * BASE MIDDLEWARE
const settings = [express.json(), morgan('combined'), helmet(), logger]
server.use(settings);

// * ROUTES
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
