const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const sequelize = require('./util/database');

const userRoute = require('./routes/user')

const User = require('./model/user')
const Expense = require('./model/expense')

User.hasMany(Expense);
Expense.belongsTo(User);

app.use(userRoute)

sequelize.sync()
 .then((response)=>app.listen(3000))
 .catch(err=>console.log(err))
