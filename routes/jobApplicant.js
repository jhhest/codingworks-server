const { Router } = require("express");
const bcrypt = require("bcrypt");

const JobApplicant = require("../models/jobApplicant");

const router = new Router();

router.post("/new", async (request, response, next) => {
  try {
    console.log("\n---\nTest JobApplicant endpoint\n---\n");
    const { password, ...userParamaters } = request.body;
    console.log("check values of request.body", request.body)
    console.log("check values of password", password)
    const jobApplicant = {
      ...userParamaters,
      password: bcrypt.hashSync(password, 10)
    };
    const newJobApplicant = await JobApplicant.create(jobApplicant);
    response.json(newJobApplicant);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
