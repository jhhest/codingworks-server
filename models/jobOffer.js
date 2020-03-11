const db = require("../db");
const Sequelize = require("sequelize");

const JobApplication = require("./jobApplication");
const CompanyAccount = require("./companyAccount");
// const JobOffer = require("./jobOffer");
const JobApplicantAccount = require("./jobApplicantAccount");

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
JobOffer.belongsTo(CompanyAccount);

JobOffer.belongsToMany(JobApplicantAccount, { through: JobApplication })
JobApplicantAccount.belongsToMany(JobOffer, { through: JobApplication });

CompanyAccount.hasMany(JobOffer);
JobApplication.belongsTo(JobOffer);

module.exports = JobOffer;
