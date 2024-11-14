const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('postgres://postgres:enoc1234@localhost:5432/skatepark')
module.exports = sequelize

sequelize.authenticate()