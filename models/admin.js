const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Rol = require('./rol');

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	role: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'admins',
    timestamps: false
});

Rol.hasMany(Admin,{foreignKey:'rol'});
Admin.belongsTo(Rol,{foreignKey:'rol'})
module.exports = Admin;
Admin.sync()