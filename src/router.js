const express = require('express');
const {getSellers} = require('./endpoints/get-sellers');
const {getSeller} = require('./endpoints/get-seller');
const router = express.Router();

router.get('/', getSellers);
router.get('/:id', getSeller);

module.exports = router;