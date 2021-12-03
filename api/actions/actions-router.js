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
router.put('/:id', validateAction, validateActionId, async (req, res) => {
    const { id } = req.params
    await Action.update(id, req.body)
    .then(action => {
        res.json(action)
    })
})

//DELETE /api/actions/:id
router.delete('/:id', validateActionId, async (req, res, next) => {
    try {
        await Action.remove(req.params.id)
        res.json(req.action)
    } catch(err){
        next(err)
    }
})



module.exports = router