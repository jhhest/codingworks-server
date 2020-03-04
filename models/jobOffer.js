const db = require("../db");
const Sequelize = require("sequelize");

const JobApplication = require("./jobApplication");
const Company = require("./company");
// const JobOffer = require("./jobOffer");
const JobApplicant = require("./jobApplicant");

const JobOffer = db.define("job_offer", {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

JobOffer.hasMany(JobApplication);
JobOffer.belongsTo(Company);
JobApplicant.belongsToMany(JobOffer, { through: JobApplication });
JobOffer.belongsToMany(JobApplicant, { through: JobApplication })
Company.hasMany(JobOffer);
// JobApplication.hasMany(JobApplicant);JobApplication
JobApplication.belongsTo(JobOffer);

module.exports = JobOffer;
