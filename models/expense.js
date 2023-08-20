const { Sequelize, DataTypes } = require("sequelize");
const db = require("../utils/database");

const Expense = db.define("expenses", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  catagory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Expense;
