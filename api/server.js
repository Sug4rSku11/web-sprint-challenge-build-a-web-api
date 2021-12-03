const express = require('express');
// Configure your server here
const server = express();
server.use(express.json())
// Build your actions router in /api/actions/actions-router.js
const actionsRouter = require('./actions/actions-router')
// Build your projects router in /api/projects/projects-router.js
const projectsRouter = require('./projects/projects-router')
// Do NOT `server.listen()` inside this file!

module.exports = server;
