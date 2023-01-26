const express = require('express')

const router = express.Router()
const contactsRouter = require('./contacts')

router.use('/', require('./swagger'));

router.use('/contacts', contactsRouter)


module.exports = router