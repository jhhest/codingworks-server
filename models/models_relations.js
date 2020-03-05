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

JobApplicant.create({ fullName: "Jan van Hest", dateOfBirth: "1984-02-15", mail: "janvanhest@outlook.com", adress: "Abeelstraat 27 Groesbeek", password:"password"})
JobApplicant.create({ fullName: "Jend HordeJan", dateOfBirth: "1980-01-16", mail: "jend@outlook.com", adress: "Kroonstraat 25 utrecht", password:"password"})
JobApplicant.create({ fullName: "Thierry Dekelver", dateOfBirth: "1979-12-28", mail: "thierry@outlook.com", adress: "Kroonstraat 25 utrecht", password:"password"})