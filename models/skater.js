const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection"); 
const Rol = require("./rol");

const Skater = sequelize.define(
  'skater',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    anos_experiencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
/*     tableName: 'skaters',
 */    timestamps: false
});

Rol.hasHook(Skater,{foreignKey:'rol'})
Skater.belongsTo(Rol,{foreignKey:'rol'});

module.exports = Skater;
Skater.sync()
