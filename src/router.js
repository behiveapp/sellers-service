const express = require('express');
const {getSellers} = require('./endpoints/get-sellers');
const {getSeller} = require('./endpoints/get-seller');
const {createSeller} = require('./endpoints/create-seller');
const router = express.Router();

router.get('/', getSellers);
router.get('/:id', getSeller);
router.post('/', createSeller);

module.exports = router;