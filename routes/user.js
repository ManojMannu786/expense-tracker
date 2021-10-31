const express = require('express')
const router = express.Router();

const userControler = require('../controler/user')
const expenseConstroler = require('../controler/expense')
const authMIddleware = require('../middleware/auth')

router.post('/signup', userControler.postSignUp);

router.post('/login', userControler.postLogin);

router.post('/user/addExpense', authMIddleware.verifyToken , expenseConstroler.postAddExpense)

module.exports = router;