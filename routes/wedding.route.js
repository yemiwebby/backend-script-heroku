const express = require('express');
const router = express.Router();

const wedding_controller = require('../controllers/wedding.controller');

router.get('/sample', wedding_controller.sample);
router.post('/submit', wedding_controller.submit_form);
module.exports = router;