const express = require('express');
const { createPayroll, getPayroll } = require('../controllers/payrollController');
const router = express.Router();

router.post('/', createPayroll);
router.get('/', getPayroll);

module.exports = router;
