/**
 * Importing  models
 */

const Company = require("../models/company");
const JobOffer = require("../models/jobOffer");
const JobApplicant = require("../models/jobApplicant");
const JobApplication = require("../models/jobApplication");
/**
 * Making relations between models
 */

JobOffer.hasMany(JobApplication);
JobOffer.belongsTo(Company);

JobOffer.belongsToMany(JobApplicant, { through: JobApplication });
JobApplicant.belongsToMany(JobOffer, { through: JobApplication });

Company.hasMany(JobOffer);
JobApplication.belongsTo(JobOffer);
