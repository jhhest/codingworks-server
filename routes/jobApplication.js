
const { Router } = require("express");
const JobApplication = require("../models/jobApplication");

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    console.log("\n---\nTest JobApplication Endpoint\n---\n");
    console.log(JobApplication)
    response.json(JobApplication.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;