// Write your "projects" router here!
const express = require('express')
const router = express.Router()
const Project = require('./projects-model')

//GET /api/projects
router.get('/', (req, res, next) => {
    Project.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})
//GET /api/projets/:id
router.get('/:id', (req, res, next) => {

})
//POST /api/projects
router.post('/', (req, res, next) => {

})
//PUT /api/projects/:id
router.put('/:id', (req, res, next) => {

})
//DELETE /api/projects/:id
router.delete('/:id', (req, res, next) => {

})
//GET /api/projects/:id/actions
router.get('/:id/actions', (req, res, next) => {

})


module.exports = router