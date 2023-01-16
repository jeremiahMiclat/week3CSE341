const express = require('express')

const router = express.Router()
const contactsRouter = require('./contacts')

router.get('/', (req, res) => {
    res.send('Week 3 Personal Assignment')
})

router.use('/contacts', contactsRouter)


module.exports = router