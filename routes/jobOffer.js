
const { Router } = require("express");
const JobOffer = require("../models/jobOffer");

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    console.log("\n---\nTest JobOffer endpoint\n---\n");
    response.json(JobOffer.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;