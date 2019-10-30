const server = require('./server');

// ? LISTENER
const port = 5000;
server.listen(port, () => console.log(`LISTENING TO ${port}`))