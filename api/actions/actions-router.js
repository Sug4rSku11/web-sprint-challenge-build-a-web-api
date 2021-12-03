// Write your "actions" router here!
const express = require('express')
const Action = require('./actions-model')
const router = express.Router()
const { validateActionId,
    validateAction
} = require('../actions/actions-middlware')
//GET /api/actions
router.get('/', (req, res, next) => {
Action.get()
.then(actions => {
    res.status(200).json(actions)
})
.catch(next)
})
//GET /api/actions/:id
router.get('/:id', validateActionId, (req, res) => {
    res.json(req.action)
})
//POST /api/actions
router.post('/', validateAction, (req, res, next) => {
    Action.insert(req.body)
    .then(newAction => {
        res.json(newAction)
    })
    .catch(next)
})
//PUT /api/actions/:id
router.put('/:id', (req, res, next) => {

})
//DELETE /api/actions/:id
router.delete('/:id', (req, res, next) => {

})



module.exports = router