const express = require('express');
const {getSellers} = require('./endpoints/get-sellers');
const router = express.Router();

router.get('/', getSellers);

module.exports = router;