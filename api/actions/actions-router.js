// Write your "actions" router here!
const express = require('express')
const Action = require('./actions-model')
const router = express.Router()

//GET /api/actions
router.get('/', (req, res, next) => {
Action.get()
.then(actions => {
    res.status(200).json(actions)
})
.catch(next)
})
//GET /api/actions/:id
router.get('/:id', (req, res, next) => {

})
//POST /api/actions
router.post('/', (req, res, next) => {

})
//PUT /api/actions/:id
router.put('/:id', (req, res, next) => {

})
//DELETE /api/actions/:id
router.delete('/:id', (req, res, next) => {

})



module.exports = router