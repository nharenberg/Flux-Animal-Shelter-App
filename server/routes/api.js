const express = require('express');
const router = express.Router();

router.use('/animals', require('./animals'));

module.exports = router;
