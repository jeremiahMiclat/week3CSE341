const express = require('express')

const router = express.Router()
const controller = require('../controllers/contacts')

// get all contacts
router.get('/', controller.getAll)
// get one contact
router.get('/:id', controller.getOne)
// create contact
router.post('/', controller.addOne)
// update
router.put('/:id', controller.updateOne)
// delete
router.delete('/:id', controller.delOne)


module.exports = router