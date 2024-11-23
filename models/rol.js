const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
	role: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'roles',
    timestamps: false
});

module.exports = Rol;
Rol.sync();