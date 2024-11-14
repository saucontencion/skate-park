const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");  // Assuming you have this Sequelize connection

const Skater = sequelize.define(
  'Skater',
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
  }
);

// Synchronize the model with the database
Skater.sync({ force: false })  // Use force: true to drop and recreate the table
  .then(() => {
    console.log("Skater table has been created or already exists.");
  })
  .catch((error) => {
    console.error("Error synchronizing Skater table:", error);
  });

module.exports = { Skater };
