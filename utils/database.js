const { Sequelize } = require("sequelize");
const db = new Sequelize("nodecomplete", "root", "mdabdullah78615", {
  host: "",
  dialect: "mysql",
});

module.exports = db;
