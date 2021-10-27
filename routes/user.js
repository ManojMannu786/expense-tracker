const express = require('express')
const router = express.Router();

const userControler = require('../controler/user')

router.post('/signup', userControler.postLogin)

module.exports = router;