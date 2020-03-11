const { Router } = require("express");
const bcrypt = require("bcrypt");

const JobApplicantAccount = require("../models/jobApplicantAccount");

const router = new Router();

router.post("/new", async (request, response, next) => {
  try {
    console.log("\n---\nEndpoint /jopapplicant/new\n---\n");
    const { password, ...userParamaters } = request.body;
    const jobApplicant = {
      ...userParamaters,
      password: bcrypt.hashSync(password, 10)
    };
    const newJobApplicant = await JobApplicantAccount.create(jobApplicant);
    console.log(`\n jobapplicant * ${jobApplicant.userFullName} * is created:`);
    response.json(newJobApplicant);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
