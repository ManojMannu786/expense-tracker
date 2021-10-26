const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const User = {
    id:{
        type: Sequelize.INTEGER,
        autoIncremenet: true,
        allowNull: false,
        PrimaryKey:true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    pass: Sequelize.STRING
}

module.exports = User