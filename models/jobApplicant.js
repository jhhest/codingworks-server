const db = require("../db");
const Sequelize = require("sequelize");

const JobApplicant = db.define("job_applicant", {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  mail: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  adress: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});


module.exports = JobApplicant;
