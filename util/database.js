const Sequelize = require('sequlize')

const sequelize = new Sequelize('expense-tracker', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;