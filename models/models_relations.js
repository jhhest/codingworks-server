/**
 * Importing  models
 */

const CompanyAccount = require("../models/companyAccount");
const JobOffer = require("../models/jobOffer");
const JobApplicantAccount = require("../models/jobApplicantAccount");
const JobApplication = require("../models/jobApplication");
const TechnologiesInAccount = require("../models/technologiesInAccount");
const Technologies = require("../models/technologies");
const User = require("../models/user");
/**
 * Making relations between models
 */

JobOffer.hasMany(JobApplication);
JobOffer.belongsTo(CompanyAccount);
JobOffer.hasMany(TechnologiesInAccount);

JobOffer.belongsToMany(JobApplicantAccount, { through: JobApplication });
JobApplicantAccount.belongsToMany(JobOffer, { through: JobApplication });
JobApplicantAccount.hasMany(TechnologiesInAccount);
JobApplicantAccount.belongsTo(User);

Technologies.hasMany(TechnologiesInAccount);

CompanyAccount.hasMany(JobOffer);
CompanyAccount.hasMany(User);
JobApplication.belongsTo(JobOffer);
