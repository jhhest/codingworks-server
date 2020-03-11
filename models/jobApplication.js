const db = require("../db");
const Sequelize = require("sequelize");

const JobApplication = db.define("job_application", {});

module.exports = JobApplication;
