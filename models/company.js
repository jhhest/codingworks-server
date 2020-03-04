const db = require("../db");
const Sequelize = require("sequelize");

const Company = db.define("companies", {
  adress: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  website: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  contactPerson: {
    type: Sequelize.TEXT,
    allowNull: false
  }, 
  contactPersonMail: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Company;
