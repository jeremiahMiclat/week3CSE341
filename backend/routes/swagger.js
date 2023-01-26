const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../swagger_output.json');
const controller = require('../controllers/contacts')

// get all contacts
router.get('/', controller.getData)
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;