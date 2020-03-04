
const { Router } = require("express");
const JobApplicant = require("../models/jobApplicant");

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    console.log("\n---\ntest\n---\n");
    console.log(JobApplicant)
    response.json(JobApplicant.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;