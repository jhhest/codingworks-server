const db = require("../db");
const Sequelize = require("sequelize");

const JobOffer = db.define("job offer", {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = JobOffer;
