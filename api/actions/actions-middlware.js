// add middlewares here related to actions
const Action = require('./actions-model')

async function validateActionId(req, res, next){
    try {
        const action = await Action.get(req.params.id)
        if(!action){
        res.status(404).json({ message: "action not found"})
        } else {
            req.action = action
            next()
        }
    } catch (err){
        res.status(500).json({
            message: "problem finding action"
        })
    }
}

function validateAction(req, res, next) {
    const { description, notes } = req.body
    if (!description || !notes){
        res.status(400).json({
            message: "missing required description and/or notes"
        })
    } else {
        next()
    }
}
module.exports = {
    validateActionId,
    validateAction,
}