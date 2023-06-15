const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db123", "root", "naziransari", {
  dialect: "mysql",
  host: "localhost",
});

try {
  sequelize.authenticate();
  console.log("db connected");
} catch (error) {
  console.log("error", error);
}

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Contacts = require("../models/contact")(sequelize, DataTypes);

db.sequelize.sync({ force: false });
module.exports = db;
