// add middlewares here related to projects
const Project = require('./projects-model')

function logger(req, res, next) {
    const timestamp = new Date().toLocaleString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`)
    next()
  }

async function validateProjectId(req, res, next){
    try {
        const project = await Project.get(req.params.id)
        if(!project){
        res.status(404).json({ message: "project not found"})
        } else {
            req.project = project
            next()
        }
    } catch (err){
        res.status(500).json({
            message: "problem finding project"
        })
    }
}
function validateProject(req, res, next) {
    const { description, name } = req.body
    if (!name || !description){
        res.status(400).json({
            message: "missing required description and/or name"
        })
    } else {
        next()
    }
}
function validateUpdatedProject(req, res, next) {
	const { name, description, completed } = req.body;
	if (name && description && typeof completed === 'boolean' ) {
		next()
	} else {
		res.status(400).json({message: "description, name and/or completed required"})
	}
}

  module.exports = {
      logger,
      validateProjectId,
      validateProject,
      validateUpdatedProject,
  }