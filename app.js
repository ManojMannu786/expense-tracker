const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json)

const userRoute = require('./routes/user')

app.use(userRoute)

app.listen(3000);