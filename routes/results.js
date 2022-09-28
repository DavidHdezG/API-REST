var express = require('express');
var router = express.Router();

const controller = require('../controllers/results')
router.get('/:n1/:n2', controller.list);
router.post('/', controller.create);
router.put('/', controller.replace);
router.patch('/', controller.update);
router.delete('/:n1/:n2', controller.destroy);
module.exports = router;