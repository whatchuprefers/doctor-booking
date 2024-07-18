const express = require('express');
const router = express.Router();
const controllers = require('../controllers/hospital-controllers');

router.get('/', controllers.getHospitals);
router.post('/', controllers.postHospitals);

module.exports = router;
