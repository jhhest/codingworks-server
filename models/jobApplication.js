const db = require("../db");
const Sequelize = require("sequelize");

const JobApplication = db.define("job application", {});
module.exports = JobApplication;
