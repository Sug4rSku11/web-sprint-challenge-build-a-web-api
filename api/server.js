const express = require('express');
const server = express();
const { logger } = require('./projects/projects-middleware')
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

server.use(express.json())
server.use('/api/actions/', actionsRouter)
server.use('/api/projects/', projectsRouter)
server.use(logger)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.get('/', (req, res) => {
    res.send(`<h1>**It's working**</h1>`)
})

module.exports = server;
