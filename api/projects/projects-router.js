// Write your "projects" router here!
const express = require('express')
const router = express.Router()
const Project = require('./projects-model')
const { validateProjectId,
        validateProject,
        validateUpdatedProject,
      } = require('../projects/projects-middleware')

//GET /api/projects
router.get('/', (req, res, next) => {
    Project.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

//GET /api/projects/:id
router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project)
})

//POST /api/projects
router.post('/', validateProject, (req, res, next) => {
    Project.insert(req.body)
    .then(newProject => {
        res.json(newProject)
    })
    .catch(next)
})

//PUT /api/projects/:id
router.put('/:id', validateProjectId, validateUpdatedProject, async (req, res) => {
    const { id } = req.params
    await Project.update(id, req.body)
    .then(project => {
        res.json(project)
    })
})

//DELETE /api/projects/:id
router.delete('/:id', validateProjectId, async (req, res, next) => {
    try {
        await Project.remove(req.params.id)
        res.json(req.project)
    } catch (err){
        next(err)
    }
})

//GET /api/projects/:id/actions
router.get('/:id/actions', async (req, res, next) => {
    try {
        const result = await Project.getProjectActions(req.params.id)
        res.json(result)
    } catch(err){
        next(err)
    }
})



module.exports = router