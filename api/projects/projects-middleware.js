// add middlewares here related to projects
const Project = require('./projects-model')

function logger(req, res, next) {
    // DO YOUR MAGIC
    const timestamp = new Date().toLocaleString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`)
    next()
  }

  module.exports = {
      logger,
  }